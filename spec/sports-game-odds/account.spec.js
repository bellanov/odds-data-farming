
/**
 * @fileoverview Test retrieving account data.
 */
import 'dotenv/config';
import * as Account from "../../scripts/api/sports-game-odds/account.js" ; 


// eslint-disable-next-line no-undef
describe("Sports Game Odds - Retrieve account data", function () {

  // eslint-disable-next-line no-undef
  it("Retrieve account data", async function () {

    // Query Sports
    await Account.getAccount().then((sports) => {

      // Check if the sports are not undefined
      // eslint-disable-next-line no-undef
      expect(sports.data).not.toBeUndefined();

    });

  });

});
