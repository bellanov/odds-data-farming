
/**
 * @fileoverview Test the query to retrieve sports data.
 */
import 'dotenv/config';
import * as Sports from "../../scripts/api/the-odds-api/sports.js" ; 


describe("The Odds API - Retrieve sports data", function () {

  it("getSports", async function () {

    // Query sports
    await Sports.getSports().then((response) => {

      // Check if the sports are not undefined
      expect(response.data).not.toBeUndefined()});

    });

});