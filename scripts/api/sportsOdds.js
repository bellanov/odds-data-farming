/**
 * @fileoverview Query odds data from The Odds API.
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
    new winston.transports.File({ filename: "api_sport_odds.log" }), // Log to a file
  ],
});

/**
 * Query odds data.
 * @param sportKey Identifier of sport to query.
 */
export function getSportsOdds(sportKey) {
  // Retrieve API Key for authentication
  // eslint-disable-next-line no-undef
  const apiKey = process.env.THE_ODDS_API;

  if (!apiKey) {
    throw new Error(
      "API key is missing. Please set THE_ODDS_API in your .env file.",
    );
  }

  // uk | us | eu | au. Multiple can be specified if comma delimited
  const regions = "us";

  // h2h | spreads | totals. Multiple can be specified if comma delimited
  const markets = "h2h";

  // decimal | american
  const oddsFormat = "decimal";

  // iso | unix
  const dateFormat = "iso";

  const sportsOdds = axios
    .get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
      params: {
        apiKey,
        dateFormat,
        markets,
        oddsFormat,
        regions,
      },
    })
    .then((response) => {
      logger.info("Sports odds data retrieved successfully.");
      return response;
    })
    .catch((error) => {
      logger.error(`Error status ${error.response.status}`);
      logger.error(error.response.data);
    });

  return sportsOdds;
}
