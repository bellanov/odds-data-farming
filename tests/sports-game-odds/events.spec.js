
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';

import * as SportsEvents from "../../scripts/extract/sports-game-odds/events.js";


describe("A suite", function () {
  it("contains a spec with an expectation", function () {
    // Identify sport to query
    const leagueID = "UFC"

    // Query sport Events
    const events = SportsEvents.getEvents(leagueID);
    expect(events).not.toBe(null);
  });
});
