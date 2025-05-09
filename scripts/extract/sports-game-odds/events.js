
/**
 * @fileoverview Extract sports events data.
 */
import 'dotenv/config';
import * as SportsEvents from "../../api/sports-game-odds/events.js";
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
    new winston.transports.File({ filename: 'sports.log' }) // Log to a file
  ]
});


// Identify league to query
const leagueID = "NHL"

// Query Sports Events
await SportsEvents.getEvents(leagueID).then((events) => {
  
  // Check if the events are not undefined
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
