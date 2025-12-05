# Use Node.js LTS as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npx", "http-server", ".", "-p", "3000", "-a", "0.0.0.0"]