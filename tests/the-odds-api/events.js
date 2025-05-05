
/**
 * @fileoverview Test the query to retrieve events data.
 */
import 'dotenv/config';

import * as SportsEvents from "../../scripts/extract/the-odds-api/events.js" ; 

// Identify sport to query
const sportKey = "mma_mixed_martial_arts";

// Query sport Events
SportsEvents.getEvents(sportKey);
