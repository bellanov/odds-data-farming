
/**
 * @fileoverview Test the query to retrieve odds data from from the
 * perspective of a sport.
 */
import 'dotenv/config';

import * as EventOdds from "../../scripts/extract/the-odds-api/eventOdds.js" ; 


describe("The Odds API - Query event odds", function () {

  it("getEventOdds", function () {
    // Identify sport to query
    const sportKey = "icehockey_nhl";

    // Identify event to query
    const eventId = "70a33eb5091fc0ecba887d1c12386841";

    // Query sport odds
    const eventOdds = EventOdds.getEventOdds(sportKey, eventId);

    // Check if the event odds are not undefined
    expect(eventOdds).not.toBeUndefined();
  });

});