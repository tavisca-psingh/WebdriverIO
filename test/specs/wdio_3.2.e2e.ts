
import { HomePage } from '../pageobjects/vacationsdirect/home.page';
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { DateUtil } from 'test/Utility/dateUtil';
import { HomePageData } from 'test/data/homePageData';
const homePage = new HomePage();
const hotelPage = new HotelPage();
const dateUtil = new DateUtil();
const homePageData = new HomePageData();
describe('Verify functionality on hotel search', () => {

    it('Verify hotel search results', () => {
        homePage.open();
        console.log('Navigated to browser');
        homePage.clickOnHotelTab();
        console.log('Clicked on hotel tab');
        const twoDaysAfterDate = dateUtil.getFutureDate('MM/dd/yy',2);
        const threeDaysAfterDate = dateUtil.getFutureDate('MM/dd/yy',3)
        homePage.searchDestination(homePageData.hotel.search.destination, twoDaysAfterDate, threeDaysAfterDate, '');
      //  hotelPage.getCityTextInResults().should.be.equal('You successfully clicked an alert');
        hotelPage.getWayFinderDetails();
        hotelPage.getHotelResultsCount();
    });
});
