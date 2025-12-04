# Use Node.js LTS version as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including http-server
RUN npm install

# Copy application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application using http-server
CMD ["npx", "http-server", ".", "-p", "3000", "-a", "0.0.0.0"]
