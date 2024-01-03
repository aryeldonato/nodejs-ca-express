FROM node:18.16.1-alpine
WORKDIR /server

COPY . /server
RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "start" ]