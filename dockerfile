# Use the official Node.js 22 image as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and yarn.lock files into the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your application's code into the container
COPY . .

# Build the application
RUN yarn run build

# The application's port
EXPOSE 3000

# Run the application
CMD ["node", "dist/main"]