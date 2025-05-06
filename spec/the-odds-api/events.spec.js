
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';
import * as SportsEvents from "../../scripts/extract/the-odds-api/events.js" ; 


describe("The Odds API - Query sport events", function () {

  it("getEvents", async function () {
    // Identify sport to query
    const sportKey = "mma_mixed_martial_arts";

    await SportsEvents.getEvents(sportKey).then((events) => { 
      // console.log("Events:", events.data);
      // Check if the events are not undefined
      expect(events).not.toBeUndefined();
    });
  });

});