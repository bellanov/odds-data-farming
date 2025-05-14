
/**
 * @fileoverview Extract sports data.
 */
import 'dotenv/config';
import * as Sports from "../../api/sports-game-odds/sports.js";
import winston from "winston";
import fs from "fs";


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
    new winston.transports.File({ filename: 'sgo_sports.log' }) // Log to a file
  ]
});

// Query Sports
await Sports.getSports().then((sports) => {

  // Check if the sports data is not undefined
  if (sports.data) {

    // Write the sports data to a JSON file
    fs.writeFileSync("sgo_sports.json", JSON.stringify(sports.data, null, 2), "utf-8");
    logger.info("Sports data successfully written to sgo_sports.json");

    // Extract the league IDs
    let league_ids = sports.data.map((sport) => sport.leagueID);

    // Log the league IDs
    logger.info(`league_ids: ${JSON.stringify(league_ids)}`);

  } else {
    // Log an error if sports data is undefined
    console.error("sports.data is undefined or null");
  }

}).catch((error) => {
  // Log the error
  logger.error(`Error fetching sports: ${error.message}`);
});
