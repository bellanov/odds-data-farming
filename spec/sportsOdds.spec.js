/**
 * @fileoverview Test retrieving odds data.
 */
import * as SportsOdds from "../scripts/api/sportsOdds.js";

// eslint-disable-next-line no-undef
describe("The Odds API - Query sports odds", function () {
  // eslint-disable-next-line no-undef
  it("getSportsOdds", async function () {
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    // Query sport odds
    SportsOdds.getSportsOdds(sportKey).then((odds) => {
      // Check if the sports odds are not undefined
      // eslint-disable-next-line no-undef
      expect(odds.data).not.toBeUndefined();
    });
  });
});
