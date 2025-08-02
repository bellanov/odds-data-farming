FROM node:22-slim

# Establish working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only="production" && \
    npm cache clean --force

# Copy application source code
COPY . .

# Execute the specified task
ENTRYPOINT [ "scripts/cicd/entrypoint.sh" ]
