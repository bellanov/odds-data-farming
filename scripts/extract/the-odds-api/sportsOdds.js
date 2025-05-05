/**
 * @fileoverview Query odds data from The Odds API.
 */
import "dotenv/config";
import axios from "axios";

/**
 * Query odds data.
 * @param sportKey Identifier of sport to query.
 */
export function getSportsOdds(sportKey) {
  // Retrieve API Key for authentication
  // eslint-disable-next-line no-undef
  const apiKey = process.env.THE_ODDS_API;

  // uk | us | eu | au. Multiple can be specified if comma delimited
  const regions = "us";

  // h2h | spreads | totals. Multiple can be specified if comma delimited
  const markets = "h2h";

  // decimal | american
  const oddsFormat = "decimal";

  // iso | unix
  const dateFormat = "iso";

  axios
    .get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
      params: {
        apiKey,
        dateFormat,
        markets,
        oddsFormat,
        regions
      }
    })
    .then((response) => {
      // response.data.data contains a list of live and
      // upcoming events and odds for different bookmakers.
      // Events are ordered by start time (live events are first)
      console.log(JSON.stringify(response.data));

      // Check your usage
      console.log("Remaining requests",response.headers["x-requests-remaining"]);
      console.log("Used requests", response.headers["x-requests-used"]);
    })
    .catch((error) => {
      console.log("Error status", error.response.status);
      console.log(error.response.data);
    });
}
