
/**
 * @fileoverview Extract sports data.
 */
import 'dotenv/config';
import * as Sports from "../../api/the-odds-api/sports.js"; 
import winston from "winston";


// Configure Winston logger
const logger = winston.createLogger({
  level: 'info', // Log level (e.g., 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly')
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: 'sports_odds.log' }) // Log to a file
  ]
});

// Query Sports
await Sports.getSports().then((sports) => {

  // Check your usage
  console.log('Remaining Requests :',sports.headers['x-requests-remaining'])
  console.log('Used Requests      :',sports.headers['x-requests-used'])

});