FROM node:alpine

WORKDIR /backend

COPY package.json /backend/package.json
COPY package-lock.json /backend/package-lock.json

RUN npm install
RUN npm install -g nodemon

COPY . /backend

CMD ["npm", "start"]