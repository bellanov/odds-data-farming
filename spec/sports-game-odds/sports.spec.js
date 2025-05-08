
/**
 * @fileoverview Test the query to retrieve sports data.
 */
import 'dotenv/config';
import * as Sports from "../../scripts/api/sports-game-odds/sports.js" ; 


describe("Sports Game Odds - Retrieve sport data", function () {

  it("Retrieve sport data", async function () {

    // Query Sports
    await Sports.getSports().then((sports) => {

      // Check if the sports are not undefined
      expect(sports.data).not.toBeUndefined();

    });

  });

});
