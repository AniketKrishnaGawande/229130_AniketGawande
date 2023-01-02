FROM node:7
WOKRDIR /IACSD
COPY package.json /IACSD
RUN npm install
COPY . /IACSD
CMD node server.js
EXPOSE 3000