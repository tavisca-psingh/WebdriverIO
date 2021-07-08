import {Logger} from '../Utility/Logger/logger';
import {GooglePage} from '../pageobjects/google.page';
var assert = require('assert');

const googlePage = new GooglePage();
const logger = new Logger();
describe('Verify functionality on google.com', () => {

  before(() => {
    logger.addFeatureAllureReporter("Feature is: Google Page");
   googlePage.open();
  });
    it('Verify title of the page @Smoke',() =>{
       logger.info(googlePage.getTitleOfThePage());
        assert(googlePage.getTitleOfThePage() === "Google");
    });

    it('Verify content of the page @Smoke', () =>{
     logger.info(googlePage.getTextOfGoogleOffered());
      assert(googlePage.getTextOfGoogleOffered().includes("Google offered in:"));
     });
});