
/**
 * @fileoverview Test retrieving sports data.
 */
import 'dotenv/config';
import * as Sports from "../../scripts/api/sports-game-odds/sports.js" ; 


// eslint-disable-next-line no-undef
describe("Sports Game Odds - Retrieve sport data", function () {

  // eslint-disable-next-line no-undef
  it("Retrieve sport data", async function () {

    // Query Sports
    await Sports.getSports().then((sports) => {

      // Check if the sports are not undefined
      // eslint-disable-next-line no-undef
      expect(sports.data).not.toBeUndefined();

    });

  });

});
