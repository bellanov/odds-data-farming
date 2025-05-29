/**
 * @fileoverview Extract account data.
 * @description This script queries account data from The Odds API and logs the results.
 * It retrieves account data from sports and logs the account information.
 */
import * as Firestore from "../load/firestore.js";
import * as Sports from "../api/sports.js";
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
    new winston.transports.File({ filename: "account.log" }), // Log to a file
  ],
});

// Query Sports
await Sports.getSports()
  .then((sports) => {
    // Define the collection and document
    const collection = "account"; // Collection name
    const document = "requests"; // Document name

    // Check your usage
    logger.info(
      `Remaining Requests : ${sports.headers["x-requests-remaining"]}`,
    );
    logger.info(`Used Requests      : ${sports.headers["x-requests-used"]}`);

    // Extract usage information
    const requests = {
      remaining: sports.headers["x-requests-remaining"],
      used: sports.headers["x-requests-used"],
    };

    // Add the sport data to Firestore
    Firestore.addDocument(collection, document, requests)
      .then(() => {
        logger.info(`Account information successfully updated.`);
      })
      .catch((error) => {
        logger.error(`Error updating account information: ${error.message}`);
      });

    // Write the account information to a JSON file
    fs.writeFileSync(
      "data/account.json",
      JSON.stringify(requests, null, 2),
      "utf-8",
    );
    logger.info("Account data successfully written to odds_account.json");
  })
  .catch((error) => {
    // Log the error
    logger.error(`Error fetching sports: ${error.message}`);
  });
