FROM node:alpine

WORKDIR /front

COPY package.json /front/package.json

RUN npm install

COPY . /front

CMD ["npm", "start"]