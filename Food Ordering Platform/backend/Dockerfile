FROM node:22-alpine

#worknig directory
WORKDIR /application-backend

COPY package.json ./

RUN npm install

# copy the files
COPY . .

#Build the application
RUN ["npm", "run", "build"]

# expose port
EXPOSE 7001

#Start the application
CMD ["npm", "run", "start"]