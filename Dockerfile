# ---- Base ----
FROM node AS base

LABEL maintainer "tom@thomaslorentsen.co.uk"

WORKDIR /home/node/

COPY package.json package.json

RUN npm install

# ---- App ----
FROM base AS app

COPY src/ .

CMD [ "node", "app.js" ]
