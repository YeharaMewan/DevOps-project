FROM node:22-alpine

#worknig directory
WORKDIR /application-backend

COPY package.json ./

RUN npm install

# copy the files
COPY . .

# expose port
EXPOSE 5000

#Start the application
CMD ["npm", "run","dev"]