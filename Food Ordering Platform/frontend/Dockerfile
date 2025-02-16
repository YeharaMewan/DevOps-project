# base image
FROM node:22-alpine

#worknig directory
WORKDIR /application-frontend

COPY package.json ./

RUN npm install

# copy the files
COPY . .

# expose port
EXPOSE 3000

#Start the application
CMD ["npm", "run","dev"]