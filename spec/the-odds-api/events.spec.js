
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';

import * as SportsEvents from "../../scripts/extract/the-odds-api/events.js" ; 


describe("The Odds API - Query sport events", function () {

  it("getEvents", function () {
    // Identify sport to query
    const sportKey = "mma_mixed_martial_arts";

    // Query sport events
    const events = SportsEvents.getEvents(sportKey);

    // Check if the events are not undefined
    expect(events).not.toBeUndefined();
  });
  
});