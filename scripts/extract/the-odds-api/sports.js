
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

  // Check if the sports data is not undefined
  if (sports.data) {

    // Iterate through the sports data
    sports.data.forEach((sport) => {

      // Log the sport data
      logger.info(`Sport: ${JSON.stringify(sport)}`);

    });

  } else {
    // Log an error if sports data is undefined
    console.error("sports.data is undefined or null");
  }

});