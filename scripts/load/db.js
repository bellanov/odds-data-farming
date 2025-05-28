/**
 * @fileoverview Load data into Firestore.
 */
import "dotenv/config";
import * as Firebase from "../../config/firebase.js";
import { doc, setDoc, getFirestore } from "firebase/firestore";
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
    new winston.transports.File({ filename: "db.log" }), // Log to a file
  ],
});

/**
 * Add asdfasdfasdf asdfadf.
 * @param sportKey Identifier of sport to query.
 */
export async function addDocument() {
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(Firebase.app);

  // Log the start of the document addition process
  logger.info("Adding documents to Firestore...");

  // Add a new document in collection "cities"
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  })
    .then(() => {
      // Log success message
      logger.info("Document successfully written!");
    })
    .catch((error) => {
      // Log error message
      logger.error("Error writing document: ", error);
    });
}

// Call the function to add the document
addDocument();
