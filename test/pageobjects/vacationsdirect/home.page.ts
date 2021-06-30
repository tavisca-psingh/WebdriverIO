import BasePage from "../basePage";
import { DateUtil } from '../../Utility/dateUtil';
import { HomePageData } from '../../data/homePageData';
const dateUtil = new DateUtil();
const homePageData = new HomePageData();

export class HomePage extends BasePage{

    private get destination(): WebdriverIO.Element { return $('input[name="Destination"]'); }
    private get checkIn(): WebdriverIO.Element { return $('input[name="CheckIn"]'); }
    private get checkOut(): WebdriverIO.Element { return $('input[name="CheckOut"]'); }
    private get hotelTab(): WebdriverIO.Element { return $('div>a[data-qaid=Link_hotel]'); }
    private get searchButton() { return $('button[data-qaid="Button_HotelSubmitSearch"]'); }

    checkInActualValue : string;
    checkOutActualValue: string;

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
        this.checkInActualValue=this.checkIn.getValue();
        console.log(`Check In date entered`);
        this.checkOut.setValue(checkOut);
        browser.keys("Enter");
        this.checkOutActualValue = this.checkOut.getValue();
        console.log(`Check out date entered`);
        console.log(`Check Out date is:${checkOut}`);
        this.searchButton.click();
        this.waitForHotelResultsPageToDisplay(10000);
    }
    waitForHotelResultsPageToDisplay(timeoutInSec: number){
        browser.waitUntil(()=> $('button[data-qaid=Button_SortByHotelName]').isDisplayed(),
        {
            timeout: timeoutInSec,
            timeoutMsg: `Page is not loaded after ${timeoutInSec} seconds.`
        }
        );
    }

    openUrlAndSearchHotel()
    {
        super.open();
        console.log('Navigated to browser');
        this.clickOnHotelTab();
        console.log('Clicked on hotel tab');
        const twoDaysAfterDate = dateUtil.getFutureDate({dateFormat:'MM/dd/yy', daysToAdd:2});
        const threeDaysAfterDate = dateUtil.getFutureDate({dateFormat:'MM/dd/yy', daysToAdd:3})
        this.searchDestination(homePageData.hotel.search.destination, twoDaysAfterDate, threeDaysAfterDate, '');
    }
}

