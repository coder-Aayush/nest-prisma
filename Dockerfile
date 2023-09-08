FROM node:20.5.0-slim

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package*.json yarn.lock ./

# Install the project dependencies
RUN yarn install --production


# Copy the compiled JavaScript files to the container
COPY dist/ .

# Copy the .env file to the container
COPY .env .


# Expose port 3000
EXPOSE 3000

CMD ["node", "main.js"]