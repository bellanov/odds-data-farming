
/**
 * @fileoverview Test the query to retrieve sports data.
 */
import 'dotenv/config';
import * as Sports from "../../api/sports-game-odds/sports.js" ; 


// Query Sports
await Sports.getSports().then((sports) => {

  if (sports.data) {

    sports.data.forEach((sport) => {

      // Check if the sports are not undefined
      console.log(sport);

    });

  } else {
    console.error("sports.data is undefined or null");
  }

});
