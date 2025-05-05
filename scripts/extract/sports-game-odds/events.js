/**
 * @fileoverview Query sports data from Sports Game Odds.
 */
import 'dotenv/config';
import axios from "axios";

/**
 * Query events data.
 */
async function getEvents(leagueID) {

  const options = {
    method: "GET",
    url: "https://api.sportsgameodds.com/v2/events/",
    params: { 
      // eslint-disable-next-line no-undef
      apiKey: process.env.SPORTS_GAME_ODDS,
      leagueID: leagueID
    },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// TODO: Remove after modularizing the project
const leagueID = "UFC"

getEvents(leagueID);
