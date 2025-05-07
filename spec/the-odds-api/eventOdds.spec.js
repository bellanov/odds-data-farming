
/**
 * @fileoverview Test the query to retrieve odds data from from the
 * perspective of a sport.
 */
import 'dotenv/config';
import * as EventOdds from "../../scripts/api/the-odds-api/eventOdds.js" ; 


describe("The Odds API - Query event odds", function () {

  it("getEventOdds", async function () {
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    // Identify event to query
    const eventId = "5811c64caed1ddcb2e50cb7b2f4fda58";

    // Query sport odds
    await EventOdds.getEventOdds(sportKey, eventId).then((response) => {

      // Check if the sports odds are not undefined
      expect(response.data).not.toBeUndefined();

    });

  });

});