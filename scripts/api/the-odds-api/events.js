/**
 * @fileoverview Query events data from The Odds API.
 */
import 'dotenv/config';
import axios from "axios";

/**
 * Query events data.
 * @param sportKey Identifier of sport to query.
 */
export function getEvents(sportKey) {
  // Retrieve API Key for authentication
  // eslint-disable-next-line no-undef
  const apiKey = process.env.THE_ODDS_API;
  
  const events = axios.get(`https://api.the-odds-api.com/v4/sports/${sportKey}/events`, {
      params: {
        apiKey,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("Error status", error.response.status);
      console.log(error.response.data);
    });

    return events;
}
