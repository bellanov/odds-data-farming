
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';
import * as SportsEvents from "../../scripts/api/sports-game-odds/events.js";


describe("Sports Game Odds - Query sport events", function () {
  it("Query sport events", async function () {
    // Identify league to query
    const leagueID = "NHL"

    // Query sports events
    await SportsEvents.getEvents(leagueID).then((response) => {

      // Check if the events are not undefined
      expect(response.data).not.toBeUndefined();

    });

  });

});
