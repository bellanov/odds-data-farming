/**
 * @fileoverview Firestore Database Definition.
 */
import * as Firebase from "../../config/firebase.js";
import { doc, setDoc, getFirestore } from "firebase/firestore";
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
 * Add a document to a collection in Firestore.
 * @param collection Name the Collection to add document.
 * @param document Name of the Document to add to the collection.
 * @param data Data contained within a document.
 */
export async function addDocument(collection, document, data) {
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(Firebase.app);

  // Log the parameters being used
  logger.info(
    `Adding document to collection: ${collection}, document: ${document}, data: ${JSON.stringify(data)}`,
  );

  // Add a new document in collection
  await setDoc(doc(db, collection, document), data)
    .then(() => {
      // Log success message
      logger.info(`Document ${document} successfully written!`);
    })
    .catch((error) => {
      // Log error message
      logger.error("Error writing document: ", error);
    });
}

/**
 * Add a document to a subcollection in Firestore.
 * @param {string} parentCollection - Name of the parent collection.
 * @param {string} parentDoc - ID of the parent document.
 * @param {string} subcollection - Name of the subcollection.
 * @param {string} subDoc - ID of the subcollection document.
 * @param {object} data - Data to write.
 */
export async function addToSubcollection(
  parentCollection,
  parentDoc,
  subcollection,
  subDoc,
  data,
) {
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(Firebase.app);

  // Log the parameters being used
  logger.info(
    `Adding document to subcollection: ${parentCollection}/${parentDoc}/${subcollection}/${subDoc}, data: ${JSON.stringify(data)}`,
  );

  // Add a new document in collection
  await setDoc(
    doc(db, parentCollection, parentDoc, subcollection, subDoc),
    data,
  )
    .then(() => {
      // Log success message
      logger.info(`Document ${subDoc} successfully written to subcollection!`);
    })
    .catch((error) => {
      // Log error message
      logger.error("Error writing document to subcollection: ", error);
    });
}
