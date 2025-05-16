/**
 * @fileoverview Extract sport odds data.
 * @description This script queries event odds data from The Odds API and logs the results.
 * It retrieves event odds data for a specific sport and event, and logs the event information.
 */
import * as Sports from "../../scripts/api/sportsOdds.js";
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
    new winston.transports.File({ filename: "sport_odds.log" }), // Log to a file
  ],
});

// Identify sport to query
const sportKey = "icehockey_nhl";

// Query Sports
await Sports.getSportsOdds(sportKey)
  .then((sport) => {
    // Check if the events data is not undefined
    if (sport.data) {
      // Write the events object to a JSON file
      fs.writeFileSync(
        "data/sport_odds.json",
        JSON.stringify(sport.data, null, 2),
        "utf-8",
      );
      logger.info("Event data successfully written to odds_sport_odds.json");

      // Log the event data
      logger.info(`Sport: ${JSON.stringify(sport.data)}`);
    } else {
      // Log an error if events data is undefined
      logger.error("sport.data is undefined or null");
    }
  })
  .catch((error) => {
    // Log the error
    logger.error(`Error fetching sport: ${error.message}`);
  });
