# base image
FROM node:22-alpine

#worknig directory
WORKDIR /application-frontend

COPY package.json ./

RUN npm install

# copy the files
COPY . .

#Build the application
RUN ["npm", "run","build"]

# expose port
EXPOSE 3000

# Start the application with --host flag to bind to all interfaces
CMD ["npm", "run", "preview", "--", "--port", "3000", "--host"]