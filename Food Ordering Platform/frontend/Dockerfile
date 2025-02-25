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

#Build the application
CMD ["npm", "run","build"]

#Start the application
CMD ["npm", "run", "preview"]