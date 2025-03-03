# Use the official Node.js image as the base image
FROM node:14-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Production stage
FROM base AS production
# Build the Next.js application only for production
RUN npm run build
# Expose the port the app runs on
EXPOSE 3000
# Start the Next.js application in production mode
CMD ["npm", "start"]

# Development stage
FROM base AS development
# Expose the port the app runs on
EXPOSE 3000
# Start the Next.js application in development mode
CMD ["npm", "run", "dev"]
