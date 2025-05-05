/**
 * @fileoverview Query odds data from The Odds API.
 */
import 'dotenv/config';
import axios from "axios";

/**
 * Query odds data.
 * @param arg A number to do something to.
 */
function getOdds() {
  // Retrieve API Key for authentication
  const apiKey = process.env.THE_ODDS_API;

  // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports
  const sportKey = "upcoming";
  
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
        regions,
        markets,
        oddsFormat,
        dateFormat,
      },
    })
    .then((response) => {
      // response.data.data contains a list of live and
      //   upcoming events and odds for different bookmakers.
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
getOdds();
