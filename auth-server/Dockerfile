FROM node:19-alpine3.16 as builder
   
WORKDIR /app
   
COPY package*.json ./
RUN npm install --verbose
COPY . .

EXPOSE 5001
 
CMD [ "npm", "run", "dev" ]