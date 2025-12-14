FROM node:24-slim

# Establish working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only="production" && \
    npm cache clean --force

# Copy application source code
COPY . .

# Execute a Task
CMD [ "npm", "run", "odds-event-odds" ]
