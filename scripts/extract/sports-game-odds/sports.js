
const axios = require('axios').default;
require('dotenv').config()

async function getSports() {

  const axios = require('axios').default;

  const options = {
    method: 'GET',
    url: 'https://api.sportsgameodds.com/v2/leagues/',
    params: { apiKey: process.env.SPORTS_GAME_ODDS }
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getSports();