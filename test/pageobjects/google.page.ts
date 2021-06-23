import Page from "./page";

export class GooglePage extends Page {

    protected get googleOffered(){
        return $('div[id="SIvCob"]')
    }
    getTitleOfThePage() {
        console.log("Title of the page is: "+browser.getTitle());
        return browser.getTitle();
    }

    async getTextOfTheLocator(locator: WebdriverIO.Element) {
        console.log(`Text of the locator is: `+await locator.getText());
        return locator.getText();
    }

    open () {
        return super.open('www.google.com');
    }
}