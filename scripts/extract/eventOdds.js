/**
 * @fileoverview Extract event odds data.
 * @description This script queries event odds data from The Odds API and logs the results.
 * It retrieves event odds data for a specific sport and event, and logs the event information.
 */
import * as Events from "../api/events.js";
import * as EventOdds from "../api/eventOdds.js";
import * as Sports from "../api/sports.js";
import winston from "winston";
import fs from "fs";

// Delay function to avoid rate limiting
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let rateLimit = 0; // Rate limit in milliseconds (1 second)

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
    new winston.transports.File({ filename: "event_odds.log" }), // Log to a file
  ],
});

export async function fetchEventsWithDelay(sportKey) {
  // Delay to avoid rate limiting
  await delay((rateLimit += 500)); // Increase delay for each request

  // Query Events
  const sportsEvents = Events.getEvents(sportKey)
    .then((events) => {
      const sportsEvents = [];

      // Check if the events data is not undefined
      if (events.data) {
        // Iterate through the events data
        events.data.forEach((event) => {
          // Log the event data
          logger.info(`ID         : ${JSON.stringify(event.id)}`);
          logger.info(`Sport      : ${JSON.stringify(event.sport_title)}`);
          logger.info(`Key        : ${JSON.stringify(event.sport_key)}`);
          logger.info(`Home Team  : ${JSON.stringify(event.home_team)}`);
          logger.info(`Away Team  : ${JSON.stringify(event.away_team)}`);
          logger.info(`Event Date : ${JSON.stringify(event.commence_time)}`);
          logger.info(`-------------------------------------`);

          // Extract sport key and event ID
          sportsEvents.push({
            sportKey: event.sport_key,
            eventId: event.id,
          });
        });
        logger.info(
          `Events data for sport ( ${sportKey} ) fetched successfully.`,
        );
        return sportsEvents;
      } else {
        // Log an error if events data is undefined
        logger.error("events.data is undefined or null");
      }
    })
    .catch((error) => {
      // Log the error
      logger.error(`Error fetching events: ${error.message}`);
    });

  return sportsEvents;
}

export async function fetchOddsWithDelay(sportKey, eventId) {
  // Delay to avoid rate limiting
  await delay((rateLimit += 500)); // Increase delay for each request

  // Query Odds
  const eventOdds = EventOdds.getEventOdds(sportKey, eventId)
    .then((odds) => {
      // Check if the odds data is not undefined
      if (odds.data) {
        logger.info("Odds data successfully retrieved.");
        logger.info(
          `Odds data for event ( ${eventId} ) in sport ( ${sportKey} )`,
        );
        logger.info(`Odds data: ${JSON.stringify(odds.data)}`);
        return odds;
      } else {
        // Log an error if odds data is undefined
        logger.error("odds.data is undefined or null");
      }
    })
    .catch((error) => {
      // Log the error
      logger.error(`Error fetching odds: ${error.message}`);
    });

  return eventOdds;
}

// Query Sports
const sports = await Sports.getSports()
  .then((sports) => {
    // Check if the sports data is not undefined
    if (sports.data) {
      logger.info("Sports data successfully retrieved.");
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

  // Fetch the events data for each sport
  const events = await fetchEventsWithDelay(sportKey).then((sportsEvents) => {
    logger.info(`Events data for sport ${sportKey} fetched successfully.`);
    return sportsEvents;
  });

  // Fetch odds data for each event
  events.forEach(async (event) => {
    // Fetch odds data with delay
    logger.info(
      `Fetching odds data for event ( ${event.eventId} ) in sport ( ${event.sportKey} )`,
    );
    fetchOddsWithDelay(event.sportKey, event.eventId)
      .then((odds) => {
        // Check if the odds data is not undefined
        if (odds.data) {
          logger.info(`Odds data: ${JSON.stringify(odds.data)}`);

          // Write the events object to a JSON file
          fs.writeFileSync(
            `data/event_${event.eventId}.json`,
            JSON.stringify(odds.data, null, 2),
            "utf-8",
          );
          logger.info(
            `Events data successfully written to data/event_${event.eventId}.json`,
          );
        } else {
          // Log an error if odds data is undefined
          logger.error("odds.data is undefined or null");
        }
      })
      .catch((error) => {
        // Log the error
        logger.error(`Error fetching odds: ${error.message}`);
      });
  });
});
