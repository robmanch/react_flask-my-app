# Use the official Node.js image as base
FROM node:latest as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as a lightweight web server
FROM nginx:latest

# Copy the built React app from the build stage to the Nginx web server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
