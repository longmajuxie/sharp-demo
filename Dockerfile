FROM node:8.11.1

# Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service

# Bundle app source
COPY . /home/Service
RUN yarn install


CMD node test.js