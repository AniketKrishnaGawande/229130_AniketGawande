FROM node:7
WORKDIR /IACSD
COPY package.json /IACSD
RUN npm install
COPY . /IACSD
CMD node server.js
EXPOSE 3000
