import BasePage from "./basePage";

export class GooglePage extends BasePage {

     get googleOffered(): WebdriverIO.Element {
        return $('div[id=SIvCob]')
    }
    getTitleOfThePage(): string {
        console.log("Title of the page is: "+browser.getTitle());
        return browser.getTitle();
    }
     getTextOfGoogleOffered() : string{
        console.log(`Text of the locator is: `+ this.googleOffered.getText());
        return this.googleOffered.getText();
    }

    open () {
        return super.open('www.google.com');
    }
}