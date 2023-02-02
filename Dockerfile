FROM node:18-alpine

LABEL maintainer="luissena <sena.luisgf@gmail.com>"

USER node

WORKDIR /home/node/app

COPY package*.json .
COPY yarn.lock .

RUN yarn && yarn cache clean

COPY . .

CMD [ "npm", "run", "start:dev" ]