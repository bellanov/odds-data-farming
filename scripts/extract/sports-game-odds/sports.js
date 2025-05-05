/**
 * @fileoverview Query sports data from Sports Game Odds.
 */
import 'dotenv/config';
import axios from "axios";

/**
 * Query sports data.
 */
export async function getSports() {

  const options = {
    method: "GET",
    url: "https://api.sportsgameodds.com/v2/leagues/",
    // eslint-disable-next-line no-undef
    params: { apiKey: process.env.SPORTS_GAME_ODDS },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
