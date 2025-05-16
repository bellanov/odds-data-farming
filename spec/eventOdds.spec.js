/**
 * @fileoverview Test retrieving odds data.
 */
import * as EventOdds from "../scripts/api/eventOdds.js";

// eslint-disable-next-line no-undef
describe("The Odds API - Query event odds", function () {
  // eslint-disable-next-line no-undef
  it("getEventOdds", async function () {
    // Identify sport to query
    const sportKey = "mma_mixed_martial_arts";

    // Identify event to query
    const eventId = "e97aca6d3ad950770d7d0b00976f948b";

    // Query sport odds
    EventOdds.getEventOdds(sportKey, eventId).then((odds) => {
      // Check if the sports odds are not undefined
      // eslint-disable-next-line no-undef
      expect(odds.data).not.toBeUndefined();
    });
  });
});
