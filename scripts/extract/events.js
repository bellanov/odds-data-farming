/**
 * @fileoverview Extract events data.
 * @description This script queries events data from The Odds API and logs the results.
 * It retrieves sports data, iterates through each sport, and fetches events data for each sport.
 */
import * as Events from "../../scripts/api/events.js";
import * as Sports from "../../scripts/api/sports.js";
import winston from "winston";
import fs from "fs";

// Delay function to avoid rate limiting
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let rateLimit = 1000; // Rate limit in milliseconds (1 second)

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
    new winston.transports.File({ filename: "events.log" }), // Log to a file
  ],
});

async function fetchEventsWithDelay(sportKey) {
  // Delay to avoid rate limiting
  await delay((rateLimit += 500)); // Increase delay for each request

  // Query Sports
  Events.getEvents(sportKey)
    .then((events) => {
      // Check if the events data is not undefined
      if (events.data) {
        // Write the events object to a JSON file
        fs.writeFileSync(
          "data/events.json",
          JSON.stringify(events.data, null, 2),
          "utf-8",
        );
        logger.info("Events data successfully written to events.json");

        // Iterate through the events data
        events.data.forEach((event) => {
          // Log the event data
          logger.info(`Event Id   : ${JSON.stringify(event.id)}`);
          logger.info(`Sport      : ${JSON.stringify(event.sport_title)}`);
          logger.info(`Home Team  : ${JSON.stringify(event.home_team)}`);
          logger.info(`Away Team  : ${JSON.stringify(event.away_team)}`);
          logger.info(`Event Date : ${JSON.stringify(event.commence_time)}`);
          logger.info(`-------------------------------------`);
        });
      } else {
        // Log an error if events data is undefined
        logger.error("events.data is undefined or null");
      }
    })
    .catch((error) => {
      // Log the error
      logger.error(`Error fetching events: ${error.message}`);
    });
}

// Query Sports
const sports = await Sports.getSports()
  .then((sports) => {
    // Check if the sports data is not undefined
    if (sports.data) {
      // Write the sports data to a JSON file
      fs.writeFileSync(
        "data/sports.json",
        JSON.stringify(sports.data, null, 2),
        "utf-8",
      );
      logger.info("Sports data successfully written to odds_sports.json");

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

// Iterate through the sports data
sports.data.forEach(async (sport) => {
  // Identify sports to query
  const sportKey = sport.key;

  // Fetch the events data for the sport
  logger.info(`Fetching events for sport: ${sportKey}`);
  fetchEventsWithDelay(sportKey);
});
