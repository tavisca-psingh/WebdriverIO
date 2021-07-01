import BasePage from "../basePage";
export class LandingPage extends BasePage{

    private get hotelTab(): WebdriverIO.Element { return $('div>a[data-qaid=Link_hotel]'); }

    clickOnHotelTab() {
        this.hotelTab.waitForEnabled();
        this.hotelTab.click();
    }
}

