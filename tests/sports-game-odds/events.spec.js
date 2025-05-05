
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';

import * as SportsEvents from "../../scripts/extract/sports-game-odds/events.js";


describe("Sports Game Odds - Query sport events", function () {
  it("Query sport events", function () {
    // Identify league to query
    const leagueID = "UFC"

    // Query sports events
    SportsEvents.getEvents(leagueID);
  });
});
