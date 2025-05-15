/**
 * @fileoverview Extract event odds data.
 */
import "dotenv/config";
import * as Events from "../../api/eventOdds.js";
import winston from "winston";
import fs from "fs";

// Configure Winston logger
const logger = winston.createLogger({
  level: "info", // Log level (e.g., 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly')
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    }),
  ),
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: "odds_event_odds.log" }), // Log to a file
  ],
});

// Identify sport to query
const sportKey = "icehockey_nhl";

// Identify event to query
const eventId = "1788c3241e069a3d1d6a0de166535580";

// Query Sports
await Events.getEventOdds(sportKey, eventId)
  .then((event) => {
    // Check if the events data is not undefined
    if (event.data) {
      // Write the events object to a JSON file
      fs.writeFileSync(
        "odds_event_odds.json",
        JSON.stringify(event.data, null, 2),
        "utf-8",
      );
      logger.info("Event data successfully written to odds_event_odds.json");

      // Log the event data
      logger.info(`Event: ${JSON.stringify(event.data)}`);
    } else {
      // Log an error if events data is undefined
      console.error("events.data is undefined or null");
    }
  })
  .catch((error) => {
    // Log the error
    logger.error(`Error fetching events: ${error.message}`);
  });
