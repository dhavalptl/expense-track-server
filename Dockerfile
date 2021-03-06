FROM node:12-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production --silent
COPY . .
EXPOSE 4000
CMD npm start