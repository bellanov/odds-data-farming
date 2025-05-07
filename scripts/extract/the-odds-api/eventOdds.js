/**
 * @fileoverview Query odds data from The Odds API.
 */
import "dotenv/config";
import axios from "axios";

/**
 * Query odds data.
 * @param sportKey Identifier of sport to query.
 */
export function getEventOdds(sportKey, eventId) {
  // Retrieve API Key for authentication
  // eslint-disable-next-line no-undef
  const apiKey = process.env.THE_ODDS_API;

  if (!apiKey) {
    throw new Error("API key is missing. Please set THE_ODDS_API in your .env file.");
  }

  // uk | us | eu | au. Multiple can be specified if comma delimited
  const regions = "us";

  // h2h | spreads | totals. Multiple can be specified if comma delimited
  const markets = "h2h";

  // decimal | american
  const oddsFormat = "decimal";

  // iso | unix
  const dateFormat = "iso";

  const eventOdds = axios.get(`https://api.the-odds-api.com/v4/sports/${sportKey}/events/${eventId}/odds`, {
      params: {
        apiKey,
        dateFormat,
        markets,
        oddsFormat,
        regions
      }
    })
    .then((response) => {
      // Check your usage
      console.log("Remaining requests",response.headers["x-requests-remaining"]);
      console.log("Used requests", response.headers["x-requests-used"]);
      return response;
    })
    .catch((error) => {
      console.log("Error status", error.response.status);
      console.log(error.response.data);
    });

    return eventOdds;
}
