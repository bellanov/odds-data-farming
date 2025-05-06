
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';
import * as SportsEvents from "../../scripts/extract/the-odds-api/events.js" ; 


describe("The Odds API - Query sport events", function () {

  it("getEvents", async function () {
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    await SportsEvents.getEvents(sportKey).then((response) => { 
      // Check if the events are not undefined
      expect(response.data).not.toBeUndefined();
    });

  });

});