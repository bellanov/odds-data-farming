/**
 * @fileoverview Query sports data from Sports Game Odds.
 */
require("dotenv").config();

const axios = require("axios");

// Query sports data
function getSports() {
  // Retrieve API Key for authentication
  const apiKey = process.env.THE_ODDS_API;

  axios
    .get("https://api.the-odds-api.com/v4/sports", {
      params: {
        apiKey,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Error status", error.response.status);
      console.log(error.response.data);
    });
}

getSports();
