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
  
  axios
    .get(`https://api.the-odds-api.com/v4/sports/${sportKey}/events`, {
      params: {
        apiKey,
      },
    })
    .then((response) => {
      // response.data.data contains a list of live and
      // upcoming events and odds for different bookmakers.
      // Events are ordered by start time (live events are first)
      console.log(JSON.stringify(response.data));

      // Check your usage
      console.log(
        "Remaining requests",
        response.headers["x-requests-remaining"],
      );
      console.log("Used requests", response.headers["x-requests-used"]);
    })
    .catch((error) => {
      console.log("Error status", error.response.status);
      console.log(error.response.data);
    });
}

// TODO: Remove after modularizing the project

// use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports
const sportKey = "mma_mixed_martial_arts";

getEvents(sportKey);
