
/**
 * @fileoverview Test the query to retrieve sports data.
 */
import 'dotenv/config';

import * as Sports from "../../scripts/extract/sports-game-odds/sports.js" ; 


describe("Sports Game Odds - Retrieve sport data", function () {
  it("Retrieve sport data", function () {
    // Query Sports
    Sports.getSports();
  });
});