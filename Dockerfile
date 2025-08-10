# Stage 1: Build React app
FROM node:22 AS build

# This is the working directory *inside* the container
WORKDIR /abao_marissa_final_site

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:1.25.3

# Copy build output from build stage
COPY --from=build /abao_marissa_final_site/build /usr/share/nginx/html

# Expose port 80 in the container
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
