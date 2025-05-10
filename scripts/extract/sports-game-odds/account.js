
/**
 * @fileoverview Extract sports data.
 */
import 'dotenv/config';
import * as Account from "../../api/sports-game-odds/account.js";
import winston from "winston";


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
    new winston.transports.File({ filename: 'account_sgo.log' }) // Log to a file
  ]
});

// Query Sports
await Account.getAccount().then((account) => {

  // Log the account data
  logger.info(`Sport: ${JSON.stringify(account.data)}`);
  
});
