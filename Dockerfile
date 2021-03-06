FROM node:10.14.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
RUN npm install -g @angular/cli
#RUN ln -s "$(which nodejs)" /usr/local/bin/node
RUN npm install
# If you are building your code for production
# RUN npm install --only=production
#abc
# Bundle app source
COPY . .

EXPOSE 80
CMD ng serve --host 0.0.0.0
