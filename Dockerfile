FROM node

LABEL maintainer "tom@thomaslorentsen.co.uk"

WORKDIR /home/node/

COPY package.json package.json

RUN npm install

COPY src/ .

CMD [ "node", "app.js" ]
