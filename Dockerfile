FROM node:10
# Set image metadata
LABEL version="1.0"
LABEL description="Blog-webapp"
# Create app directory
WORKDIR /usr/src/app
# install dependencies
COPY package*.json ./
RUN npm cache clean --force && npm install
# copy app source to image _after_ npm install so that
# application code changes don’t bust the docker cache of 
# npm install step
COPY . .
# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
EXPOSE 3000
CMD npm run build && npm start