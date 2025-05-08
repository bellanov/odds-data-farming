
/**
 * @fileoverview Test the query to retrieve sports data.
 */
import 'dotenv/config';
import * as Sports from "../../api/the-odds-api/sports.js" ; 


// Query Sports
await Sports.getSports().then((sports) => {

  sports.data.forEach((sport) => {

    // Check if the sports are not undefined
    console.log(sport);

  });

});