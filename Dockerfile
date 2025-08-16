# ---------- Stage 1: Build the React app ----------
# Uses Node 22, same as your current setup
FROM node:22 AS build

# Inside the container, work here
WORKDIR /abao_marissa_final_site

# Install dependencies using package.json + lock file
COPY package*.json ./
RUN npm install

# Copy the rest of the source and build a static bundle to /build
COPY . .
RUN npm run build
# Output: /abao_marissa_final_site/build

# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:1.25.3

# Use our SPA-friendly Nginx config (with try_files -> index.html)
# Place nginx.conf in your project root next to this Dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the build stage into Nginx web root
COPY --from=build /abao_marissa_final_site/build /usr/share/nginx/html

# Expose port 80 inside the container (we'll map host:container later)
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
