
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';

import * as SportsEvents from "../../scripts/extract/sports-game-odds/events.js" ; 

// Identify sport to query
const leagueID = "UFC"

// Query sport Events
SportsEvents.getEvents(leagueID);
