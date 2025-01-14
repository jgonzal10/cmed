FROM node:latest as builder

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

# Development stage
FROM builder as development
# Set NODE_ENV to development
ENV NODE_ENV=development

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application(in development)
CMD ["npm", "run", "dev"]

# Production stage
FROM builder as production
ENV NODE_ENV=production

# Run any production-specific build steps if needed here

# Run the production command
CMD ["npm", "start"]