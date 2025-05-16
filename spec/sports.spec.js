/**
 * @fileoverview Test retrieving sports data.
 */
import * as Sports from "../scripts/api/sports.js";

// eslint-disable-next-line no-undef
describe("The Odds API - Retrieve sports data", function () {
  // eslint-disable-next-line no-undef
  it("getSports", async function () {
    // Query sports
    Sports.getSports().then((sports) => {
      // Check if the sports are not undefined
      // eslint-disable-next-line no-undef
      expect(sports.data).not.toBeUndefined();
    });
  });
});
