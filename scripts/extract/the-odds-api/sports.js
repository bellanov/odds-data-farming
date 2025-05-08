
/**
 * @fileoverview Extract sports data.
 */
import 'dotenv/config';
import * as Sports from "../../api/the-odds-api/sports.js" ; 


// Query Sports
await Sports.getSports().then((sports) => {

  // Check if the sports data is not undefined
  if (sports.data) {

    // Iterate through the sports data
    sports.data.forEach((sport) => {

      // Log the sport data
      console.log(sport);

    });

  } else {
    // Log an error if sports data is undefined
    console.error("sports.data is undefined or null");
  }

});