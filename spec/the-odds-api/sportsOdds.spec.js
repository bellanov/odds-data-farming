
/**
 * @fileoverview Test the query to retrieve odds data from from the
 * perspective of a sport.
 */
import 'dotenv/config';
import * as SportsOdds from "../../scripts/extract/the-odds-api/sportsOdds.js" ; 


describe("The Odds API - Query sports odds", function () {

  it("getSportsOdds", async function () {
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    // Query sport odds
    await SportsOdds.getSportsOdds(sportKey).then((response) => {
      console.log(response.data);
      // Check if the sports odds are not undefined
      expect(response.data).not.toBeUndefined();

    });
  });
  
});