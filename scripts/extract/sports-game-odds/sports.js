/**
 * @fileoverview Query sports data from Sports Game Odds.
 */
require("dotenv").config();

const axios = require("axios").default;

// Query sports data
async function getSports() {

  const options = {
    method: "GET",
    url: "https://api.sportsgameodds.com/v2/leagues/",
    params: { apiKey: process.env.SPORTS_GAME_ODDS },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getSports();
