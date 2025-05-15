/**
 * @fileoverview Query sports data from The Odds API.
 */
import "dotenv/config";
import axios from "axios";

/**
 * Query sports data.
 */
export function getSports() {
  // Retrieve API Key for authentication
  // eslint-disable-next-line no-undef
  const apiKey = process.env.THE_ODDS_API;

  const sports = axios
    .get("https://api.the-odds-api.com/v4/sports", {
      params: {
        apiKey,
      },
    })
    .catch((error) => {
      console.log("Error status", error.response.status);
      console.log(error.response.data);
    });

  return sports;
}
