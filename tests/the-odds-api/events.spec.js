
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';

import * as SportsEvents from "../../scripts/extract/the-odds-api/events.js" ; 


describe("The Odds API - Query sport events", function () {
  it("Retrieve sport data", function () {
    // Identify sport to query
    const sportKey = "mma_mixed_martial_arts";

    // Query sport events
    SportsEvents.getEvents(sportKey);
  });
});