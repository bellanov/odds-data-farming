
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';
import * as SportsEvents from "../../scripts/api/the-odds-api/events.js" ; 


describe("The Odds API - Query sport events", function () {

  it("getEvents", async function () {
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    // Query events
    await SportsEvents.getEvents(sportKey).then((events) => { 

      // Check if the events are not undefined
      expect(events.data).not.toBeUndefined();

    });

  });

});