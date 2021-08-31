FROM node:14.17.4

WORKDIR /ShopApp

COPY src /ShopApp/src/

COPY package.json package-lock.json /ShopApp/
COPY tsconfig.json ormconfig.json /ShopApp/
COPY .env /ShopApp/

RUN npm install

CMD ["npm", "start"]