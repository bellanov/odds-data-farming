/**
 * @fileoverview Extract sports data.
 * @description This script queries sports data from The Odds API and logs the results.
 * It retrieves sports data and logs the sport information.
 */
import * as Sports from "../../scripts/api/sports.js";
import winston from "winston";
import fs from "fs";
import { get } from "http";

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
    new winston.transports.File({ filename: "sports.log" }), // Log to a file
  ],
});

export async function getSports() {
  // Query Sports
  await Sports.getSports()
    .then((sports) => {
      // Check if the sports data is not undefined
      if (sports.data) {
        // Write the sports data to a JSON file
        fs.writeFileSync(
          "data/sports.json",
          JSON.stringify(sports.data, null, 2),
          "utf-8",
        );
        logger.info("Sports data successfully written to data/sports.json");

        // Iterate through the sports data
        sports.data.forEach((sport) => {
          // Log the sport data
          logger.info(`Sport: ${JSON.stringify(sport)}`);
        });
        return sports;
      } else {
        // Log an error if sports data is undefined
        logger.error("sports.data is undefined or null");
      }
    })
    .catch((error) => {
      // Log the error
      logger.error(`Error fetching sports: ${error.message}`);
    });
}

// Execute the function to get sports data
getSports();
