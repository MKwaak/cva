FROM node:13-alpine

WORKDIR /home/app/server

ENV NODE_ENV production

RUN apk add --no-cache --upgrade bash jq

COPY . /home/app/server

RUN cd /home/app/server && yarn install

EXPOSE 5000

CMD ["/home/app/server/script.sh"]
