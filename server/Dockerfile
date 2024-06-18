FROM node:18-slim

RUN apt-get update && apt-get install -y openssl libssl-dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
