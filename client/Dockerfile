FROM node:13-alpine

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app

WORKDIR /home/app

ENV NODE_ENV production

COPY package*.json .

RUN yarn install

COPY . /home/app

RUN yarn run build

EXPOSE 3000

CMD [ "npm", "start" ]
