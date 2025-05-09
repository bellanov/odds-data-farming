/**
 * @fileoverview Query account data from Sports Game Odds.
 */
import 'dotenv/config';
import axios from "axios";

/**
 * Query account data.
 */
export async function getAccount() {

  const options = {
    method: "GET",
    url: "https://api.sportsgameodds.com/v2/account/usage",
    // eslint-disable-next-line no-undef
    params: { apiKey: process.env.SPORTS_GAME_ODDS },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
}
