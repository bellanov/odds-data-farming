/**
 * @fileoverview Query sports data from Sports Game Odds.
 */
import 'dotenv/config';
import axios from "axios";

/**
 * Query sports data.
 */
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

// TODO: Remove after modularizing the project
getSports();
