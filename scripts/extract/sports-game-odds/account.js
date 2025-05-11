
/**
 * @fileoverview Extract account data.
 */
import 'dotenv/config';
import * as Account from "../../api/sports-game-odds/account.js";
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
    new winston.transports.File({ filename: 'sgo_account.log' }) // Log to a file
  ]
});

// Query Sports
await Account.getAccount().then((account) => {

  // Check if the account data is not undefined
  if (account.data) {

    // Write the account data to a JSON file
    fs.writeFileSync("sgo_account.json", JSON.stringify(account.data, null, 2), "utf-8");
    logger.info("Account data successfully written to sgo_account.json");

    // Log the account data
    logger.info(`Account: ${JSON.stringify(account.data)}`);

  } else {
    // Log an error if account data is undefined
    console.error("account.data is undefined or null");
  }
  
}).catch((error) => {
  // Log the error
  logger.error(`Error fetching account: ${error.message}`);
});
