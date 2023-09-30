
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

ENV PORT=3004
ENV NODE_ENV=production

# Build TypeScript to JavaScript (adjust tsconfig.json if needed)
RUN npm run build

# Expose the port your app will run on (adjust as needed)
EXPOSE 3004

# Command to run when the container starts
CMD ["node", "dist/index.js"]