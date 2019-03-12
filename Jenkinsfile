#! /usr/bin/env groovy

@Library('jenkins-lib@master-ci') _

pipeline {
    agent none
    environment {
      ARTIFACTORY_PASSWORD = credentials('artifactoryPassword')
      AZURE_USER = credentials('azureServicePrincipalUser')
      AZURE_PASSWORD = credentials('azureServicePrincipalPassword')
    }
    parameters {
        string([name: 'isFinal',
            defaultValue: 'false'])
    }
    options {
        disableConcurrentBuilds()
    }
    stages {
        stage('Setup Env') {
            agent { label 'webapp' }
            steps {
                script {
                    env.VERSION = sh(returnStdout: true, script: 'grep \'"version"\' package.json | awk \'{print $2}\' | sed -e \'s/[",]//g\'').trim()
                    env.GIT_COMMIT_EMAIL = sh(script: 'git --no-pager show -s --format=\'%ae\'', returnStdout: true).trim()
                    env.GIT_COMMIT_HASH = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
                    println "GIT_COMMIT_EMAIL: $env.GIT_COMMIT_EMAIL"
                    if (env.GIT_COMMIT_EMAIL == "nobody@nowhere") {
                        env.GIT_COMMIT_EMAIL = "martin.fowler@jda.com"
                    }
                    println "GIT_COMMIT_EMAIL: $env.GIT_COMMIT_EMAIL"
                    if (env.BRANCH_NAME == "master-ci") {
                        env.TAG = "test"
                    } else if (env.BRANCH_NAME == "master") {
                        env.TAG = "stable"
                    } else if (env.BRANCH_NAME ==~ "release/.*" && params.isFinal == "true") {
                        env.TAG = "ga"
                    } else if (env.BRANCH_NAME ==~ "release/.*") {
                        env.TAG = "rc"
                    }
                    env.DEPLOY_TO_DCT = "true"
                    env.HELM_CHARTS = "webapp"
                    env.CURRENT_HOST_UID = sh(script: 'id -u', returnStdout: true).trim()
                    env.CURRENT_HOST_GID = sh(script: 'id -g', returnStdout: true).trim()
                }
                sh 'env'
            }
        }
        stage('Initialize') {
            agent { label 'webapp' }
            steps {
                setDeployStack()
                setHelmDeployFlag()
                sh 'env'
            }
        }

        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:8.9.3-alpine'
                    args '-u root:root'
                    label 'webapp'
                    reuseNode true
                }
            }
            options { skipDefaultCheckout() }
            steps {
                // Prevent yarn install certificate error
                sh 'apk add --no-cache git'
                sh 'yarn config set strict-ssl false'
                sh 'yarn install'
                sh 'yarn clean:all'
            }
            // Allow replay to delete files
            post {
                always {
                    sh "chown -R ${env.CURRENT_HOST_UID}.${env.CURRENT_HOST_GID} node_modules"
                }
            }
        }
        stage('Unit Test') {
            agent {
                docker {
                    image 'node:8.9.3-alpine'
                    args '-u root:root'
                    label 'webapp'
                    reuseNode true
                }
            }
            options { skipDefaultCheckout() }
            environment {
                NODE_OPTIONS = '--max-old-space-size=4096'
            }
            steps {
                sh 'yarn test'
            }
            // Allow replay to delete files
            post {
                always {
                    sh "chown -R ${env.CURRENT_HOST_UID}.${env.CURRENT_HOST_GID} coverage"
                }
            }
        }
        stage('Build App') {
            agent {
                docker {
                    image 'node:8.9.3-alpine'
                    args '-u root:root'
                    label 'webapp'
                    reuseNode true
                }
            }
            options { skipDefaultCheckout() }
            environment {
                NODE_OPTIONS = '--max-old-space-size=4096'
            }
            steps {
                sh 'rm -fr dist build'
                sh 'yarn build'
                sh 'yarn copy'
            }
            // Allow replay to delete files
            post {
                always {
                    sh "chown -R ${env.CURRENT_HOST_UID}.${env.CURRENT_HOST_GID} build dist"
                }
            }
        }
        stage('SonarQube Analysis') {
            agent { label 'webapp' }
            when {
                changeRequest()
            }
            options { skipDefaultCheckout() }
            steps {
                script {
                    scannerHome = tool 'sonarqube'
                }
                withSonarQubeEnv('DCT Sonar') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }

        stage('SonarQube Quality Gate Check') {
            when {
                changeRequest()
            }
            agent { label 'webapp' }
            options { skipDefaultCheckout() }
            steps {
                script {
                    timeout(time: 1, unit: 'MINUTES') {
                        def qualityGate = waitForQualityGate()
                        if (qualityGate.status != 'OK' && qualityGate.status != 'WARN') {
                            def props = readProperties  file: '.scannerwork/report-task.txt'
                            echo "sonarproperties=${props}"
                            def projectKey=props['projectKey']
                            def sonarServerUrl=props['serverUrl']
                            def response = httpRequest url : sonarServerUrl + "/api/qualitygates/project_status?projectKey=" + projectKey, authentication: 'dct-dev'
                            def projectStatus =  readJSON text: response.content
                            def issues = httpRequest url : sonarServerUrl + "/api/issues/search?componentRoots=" + projectKey + "&sinceLeakPeriod=true&resolved=false", authentication: 'dct-dev'
                            def issuesInfo =  readJSON text: issues.content
                            echo "Quality Gate Status::::: \n" + projectStatus.toString()
                            echo "Sonar violations in the PR:::::: \n" + issuesInfo.toString()
                            error "Pipeline aborted due to SonarQube quality gate failure. Please check the previous steps for more details"
                        }
                    }
                }
            }
        }
        stage('Build Image') {
            when {
                anyOf {
                    branch 'master-ci'
                    branch 'master'
                    branch 'release/*'
                }
            }
              agent { label 'webapp' }
              options { skipDefaultCheckout() }
              steps {
                sh 'docker build -t dctcontainerregistry.azurecr.io/dct-web-application:$VERSION-$TAG-$BUILD_NUMBER .'
                sh 'docker tag dctcontainerregistry.azurecr.io/dct-web-application:$VERSION-$TAG-$BUILD_NUMBER dctcontainerregistry.azurecr.io/dct-web-application:$TAG'
                script {
                    env.FQINS = "dctcontainerregistry.azurecr.io/dct-web-application:$VERSION-$TAG-$BUILD_NUMBER"
                }
                sh 'env'
              }
        }
        stage('Publish Image') {
            when {
                anyOf {
                    branch 'master-ci'
                    branch 'master'
                    branch 'release/*'
                }
            }
            agent { label 'webapp' }
            options { skipDefaultCheckout() }
            steps {
                sh 'docker login dctcontainerregistry.azurecr.io -u $AZURE_USER -p $AZURE_PASSWORD'
                sh 'docker push dctcontainerregistry.azurecr.io/dct-web-application:$VERSION-$TAG-$BUILD_NUMBER'
                sh 'docker push dctcontainerregistry.azurecr.io/dct-web-application:$TAG'
                sh 'docker rmi dctcontainerregistry.azurecr.io/dct-web-application:$VERSION-$TAG-$BUILD_NUMBER'
                sh 'docker rmi dctcontainerregistry.azurecr.io/dct-web-application:$TAG'
            }
        }

        stage('Set Image Overrides') {
            when {
                expression {
                    env.SHOULD_DEPLOY == 'true' && (env.BRANCH_NAME =~ /master/ || env.BRANCH_NAME =~ /release.*/)
                }
            }
            agent any
            steps {
                setImageOverridesEnv()
                sh 'env'
            }
        }

        stage('Trigger Deployments') {
            when {
                expression {
                    env.SHOULD_DEPLOY == 'true'
                }
            }
            parallel {
                stage('Deploy to Stable Environment') {
                    when {
                        expression {
                            env.DEPLOY_TO_DCT == 'true' && (env.BRANCH_NAME =~ /master/ || env.BRANCH_NAME =~ /release.*/)
                        }
                    }
                    steps {
                        build job: "deployment/${env.JOB_BASE_NAME}", parameters: [
                            string(name: 'imageOverrides', value: env.IMAGE_OVERRIDES),
                            string(name: 'upstreamBranch', value: env.DEPLOY_STACK)]
                    }
                }

            }
        }
        
    }
    post {
        success {
            mail to: "${env.GIT_COMMIT_EMAIL},martin.fowler@jda.com",
                subject: "Successul Pipeline: ${currentBuild.fullDisplayName}",
                body: "Build successful! ${env.BUILD_URL}"
        }
        failure {
            mail to: "${env.GIT_COMMIT_EMAIL},martin.fowler@jda.com",
                subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                body: "Something is wrong with ${env.BUILD_URL}"
        }
    }
}
