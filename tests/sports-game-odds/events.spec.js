
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';

import * as SportsEvents from "../../scripts/extract/sports-game-odds/events.js";


describe("SportsEvents", function () {
  it("Query sport events", function () {
    // Identify league to query
    const leagueID = "UFC"

    // Query sports Events
    const events = SportsEvents.getEvents(leagueID);
    expect(events).not.toBe(null);
  });
});
