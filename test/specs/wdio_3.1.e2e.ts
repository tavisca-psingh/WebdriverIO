import {GooglePage} from '../pageobjects/google.page';
var assert = require('assert');

const googlePage = new GooglePage();
describe('Verify functionality on google.com', () => {

  before(() => {
   googlePage.open();
  });
    it('Verify title of the page @Smoke',() =>{
        console.log(googlePage.getTitleOfThePage());
        assert(googlePage.getTitleOfThePage() === "Google");
    });

    it('Verify content of the page @Smoke', () =>{
        console.log(googlePage.getTextOfGoogleOffered());
        assert(googlePage.getTextOfGoogleOffered().includes("Google offered in:"));
     });
});