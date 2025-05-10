
/**
 * @fileoverview Test retrieving odds data.
 */
import 'dotenv/config';
import * as EventOdds from "../../scripts/api/the-odds-api/eventOdds.js" ; 


// eslint-disable-next-line no-undef
describe("The Odds API - Query event odds", function () {

  // eslint-disable-next-line no-undef
  it("getEventOdds", async function () {
  
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    // Identify event to query
    const eventId = "0804798016d50211ab9298d8abf13aa5";

    // Query sport odds
    await EventOdds.getEventOdds(sportKey, eventId).then((odds) => {

      // Check if the sports odds are not undefined
      // eslint-disable-next-line no-undef
      expect(odds.data).not.toBeUndefined();

    });

  });

});