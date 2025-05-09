
/**
 * @fileoverview Extract odds data.
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
    new winston.transports.File({ filename: 'odds_sports.log' }) // Log to a file
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
      logger.info(`eventID  : ${JSON.stringify(event.eventID)}`);
      logger.info(`sportID  : ${JSON.stringify(event.sportID)}`);
      logger.info(`leagueID : ${JSON.stringify(event.leagueID)}`);
      logger.info(`odds "points-all-game-ou-over" : ${JSON.stringify(event.odds["points-all-game-ou-over"])}`);
      logger.info(`odds  "points-all-game-ou-under"  : ${JSON.stringify(event.odds["points-all-game-ou-under"])}`);

    });

  } else {
    // Log an error if events data is undefined
    console.error("events.data is undefined or null");
  }

});
