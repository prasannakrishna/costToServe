## Quick start

1.  Make sure that you have Node.js v8.10 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 ssh://git@stash.jda.com:7999/yoda/luminate-ui-starter-project.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `yarn install` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `yarn start` to see the example app at `http://localhost:3000`.
5.  Here are some environment variables to connect to backend and authentication service. Change to your own value as part of npm start
    ``OAUTH_AZURE_AD_CALLBACK_URL=http://localhost:3000/auth/callback
    API_URL=http://lct.jdadelivers.com
    ``
    
    Full command is as follow:
    ``
    OAUTH_AZURE_AD_CALLBACK_URL=http://localhost:3000/auth/callback
        API_URL=http://lct.jdadelivers.com npm start
        ``


## Documentation

- [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate): This starter project is based on the react-boilerplate, for detailed usage please refer to their github
