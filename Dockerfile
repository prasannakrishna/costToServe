FROM node:8.9.3-alpine

ARG API_URL
ARG OAUTH_AZURE_AD_CALLBACK_URL

EXPOSE 80 3001

ENV PORT 80
ENV API_URL=$API_URL
ENV OAUTH_AZURE_AD_CALLBACK_URL=$OAUTH_AZURE_AD_CALLBACK_URL

WORKDIR /app

ADD ./dist /app

RUN yarn install --production --no-progress

CMD [ "yarn", "run", "start"]
