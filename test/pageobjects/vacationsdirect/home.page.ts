import BasePage from "../basePage";

export class HomePage extends BasePage{

    private get destination(): WebdriverIO.Element { return $('input[name="Destination"]'); }
    private get checkIn(): WebdriverIO.Element { return $('input[name="CheckIn"]'); }
    private get checkOut(): WebdriverIO.Element { return $('input[name="CheckOut"]'); }
    private get hotelTab(): WebdriverIO.Element { return $('div>a[data-qaid=Link_hotel]'); }
    private get searchButton() { return $('button[data-qaid="Button_HotelSubmitSearch"]'); }

    clickOnHotelTab() {
        this.hotelTab.waitForEnabled();
        this.hotelTab.click();
    }

    searchDestination(destination: string, checkIn: string , checkOut: string, guest: string) {
        this.destination.setValue(destination);
        browser.keys("Enter");
        console.log(`Check In date is:${checkIn}`);
        this.checkIn.setValue(checkIn);
        browser.keys("Enter");
        console.log(`Check In date entered`);
        this.checkOut.setValue(checkOut);
        browser.keys("Enter");
        console.log(`Check out date entered`);
        console.log(`Check Out date is:${checkOut}`);
        browser.pause(1000);
        this.searchButton.click();
    }
}

