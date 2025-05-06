
/**
 * @fileoverview Test the query to retrieve sports data.
 */
import 'dotenv/config';

import * as Sports from "../../scripts/extract/the-odds-api/sports.js" ; 


describe("The Odds API - Retrieve sports data", function () {

  it("getSports", async function () {

    // Query Sports
    await Sports.getSports().then((response) => {
      expect(response.data).not.toBeUndefined()});
    })

});