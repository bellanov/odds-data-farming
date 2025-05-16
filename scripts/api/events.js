/**
 * @fileoverview Query events data from The Odds API.
 */
import "dotenv/config";
import axios from "axios";
import winston from "winston";

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
    new winston.transports.File({ filename: "api_events.log" }), // Log to a file
  ],
});

/**
 * Query events data.
 * @param sportKey Identifier of sport to query.
 */
export function getEvents(sportKey) {
  // Retrieve API Key for authentication
  // eslint-disable-next-line no-undef
  const apiKey = process.env.THE_ODDS_API;

  const events = axios
    .get(`https://api.the-odds-api.com/v4/sports/${sportKey}/events`, {
      params: {
        apiKey,
      },
    })
    .then((response) => {
      logger.info(`Events data for ${sportKey} retrieved successfully`);
      return response;
    })
    .catch((error) => {
      logger.error(`Error status " ${error.response.status}`);
      logger.error(error.response.data);
    });

  return events;
}
