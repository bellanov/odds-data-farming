/**
 * @fileoverview Test retrieving odds data.
 */
import "dotenv/config";
import * as EventOdds from "../scripts/api/eventOdds.js";

// eslint-disable-next-line no-undef
describe("The Odds API - Query event odds", function () {
  // eslint-disable-next-line no-undef
  it("getEventOdds", async function () {
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    // Identify event to query
    const eventId = "1788c3241e069a3d1d6a0de166535580";

    // Query sport odds
    await EventOdds.getEventOdds(sportKey, eventId).then((odds) => {
      // Check if the sports odds are not undefined
      // eslint-disable-next-line no-undef
      expect(odds.data).not.toBeUndefined();
    });
  });
});
