
/**
 * @fileoverview Test the query to retrieve odds data from from the
 * perspective of a sport.
 */
import 'dotenv/config';

import * as SportsOdds from "../../scripts/extract/the-odds-api/sportsOdds.js" ; 


describe("The Odds API - Query sports odds", function () {
  it("Query sport events", function () {
    // Identify sport to query
    const sportKey = "mma_mixed_martial_arts";

    // Query sport odds
    SportsOdds.getSportsOdds(sportKey);
  });
});