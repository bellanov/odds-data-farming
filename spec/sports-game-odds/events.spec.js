
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';
import * as SportsEvents from "../../scripts/api/sports-game-odds/events.js";

// eslint-disable-next-line no-undef
describe("Sports Game Odds - Query sport events", function () {

  // eslint-disable-next-line no-undef
  it("Query sport events", async function () {
    
    // Identify league to query
    const leagueID = "NHL"

    // Query sports events
    await SportsEvents.getEvents(leagueID).then((events) => {

      // Check if the events are not undefined
      // eslint-disable-next-line no-undef
      expect(events.data).not.toBeUndefined();

    });

  });

});
