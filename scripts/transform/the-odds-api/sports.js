
/**
 * @fileoverview Test the query to retrieve sports data.
 */
// import 'dotenv/config';
import * as Sports from "../../extract/the-odds-api/sports.js"; 


async function getSports() {

  // Query sports
  await Sports.getSports().then((response) => {

    // Check if the sports are not undefined
    console.log(response.data);

  });

}

// Query sports
getSports();