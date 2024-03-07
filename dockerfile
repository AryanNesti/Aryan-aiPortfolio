# Dockerfile
FROM node:21-alpine

# Set the env variables
ARG TEST1
ARG TEST2
ARG TEST3
ENV PINECONE_API_KEY=${TEST1}
ENV PINECONE_INDEX_NAME=${TEST2}
ENV OPENAI_API_KEY=${TEST3}

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application for production
RUN npm run build
# Set the environment variable to run the Next.js application in production mode
ENV NODE_ENV production
ENV PORT 3000

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]