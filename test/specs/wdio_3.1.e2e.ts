import { idText } from "typescript";
import {GooglePage} from '../pageobjects/google.page';

const googlePage = new GooglePage();
describe('Verify functionality on google.com', () => {

    it('Verify title of the page', async() =>{
        googlePage.open();
        console.log(googlePage.getTitleOfThePage());
      //await expect(googlePage.getTitleOfThePage).toHaveTextContaining('Google');
    });

    it('Verify content of the page', async() =>{
        googlePage.open();
        console.log(googlePage.getTextOfTheLocator(googlePage.googleOffered));
       // await expect(GooglePage.getTextOfTheLocator(GooglePage.googleOffered)).toHaveTextContaining(
       //  'Google offered in:  ');
     });
});