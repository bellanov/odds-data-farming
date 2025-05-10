
/**
 * @fileoverview Extract event odds data.
 */
import 'dotenv/config';
import * as Events from "../../api/the-odds-api/events.js"; 
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

// Identify sport to query
const sportKey = "icehockey_nhl";

// Query Sports
await Events.getEvents(sportKey).then((events) => {

  // Check if the events data is not undefined
  if (events.data) {

    // Iterate through the events data
    events.data.forEach((event) => {

      // Log the event data
      logger.info(`Event: ${JSON.stringify(event)}`);

    });

  } else {
    // Log an error if events data is undefined
    console.error("events.data is undefined or null");
  }

});