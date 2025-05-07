
/**
 * @fileoverview Test the query to retrieve odds data from from the
 * perspective of a sport.
 */
import 'dotenv/config';
import * as EventOdds from "../../scripts/extract/the-odds-api/eventOdds.js" ; 


describe("The Odds API - Query event odds", function () {

  it("getEventOdds", async function () {
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    // Identify event to query
    const eventId = "f464cdc4f84223ee32ffe89a86c8bd00";

    // Query sport odds
    await EventOdds.getEventOdds(sportKey, eventId).then((response) => {

      // Check if the sports odds are not undefined
      expect(response.data).not.toBeUndefined();

    });
  });

});