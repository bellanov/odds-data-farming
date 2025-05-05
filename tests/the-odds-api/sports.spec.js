
/**
 * @fileoverview Test the query to retrieve sports data.
 */
import 'dotenv/config';

import * as Sports from "../../scripts/extract/the-odds-api/sports.js" ; 


describe("The Odds API - Retrieve sports data", function () {
  it("Retrieve sport data", function () {
    // Query Sports
    Sports.getSports();
  });
});