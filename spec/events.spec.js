/**
 * @fileoverview Test retrieving events data.
 */
import "dotenv/config";
import * as SportsEvents from "../scripts/api/events.js";

// eslint-disable-next-line no-undef
describe("The Odds API - Query sport events", function () {
  // eslint-disable-next-line no-undef
  it("getEvents", async function () {
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    // Query events
    await SportsEvents.getEvents(sportKey).then((events) => {
      // Check if the events are not undefined
      // eslint-disable-next-line no-undef
      expect(events.data).not.toBeUndefined();
    });
  });
});
