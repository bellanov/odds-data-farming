
/**
 * @fileoverview Test the query to retrieve sports data.
 */
import 'dotenv/config';
import * as SportsEvents from "../../api/sports-game-odds/events.js";


// Identify league to query
const leagueID = "NHL"

// Query Sports Events
await SportsEvents.getEvents(leagueID).then((events) => {
  
  // Check if the events are not undefined
  if (events.data) {

    // Iterate through the events data
    events.data.forEach((event) => {

      // Log the event data
      console.log(event);

    });

  } else {
    // Log an error if events data is undefined
    console.error("events.data is undefined or null");
  }

});
