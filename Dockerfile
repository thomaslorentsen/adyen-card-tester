FROM node

LABEL maintainer "tom@thomaslorentsen.co.uk"

WORKDIR /home/node/

COPY package.json package.json

RUN npm install

COPY app.js .
COPY js js
COPY views views

CMD [ "node", "app.js" ]
