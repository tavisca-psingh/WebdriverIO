
import { HomePage } from '../pageobjects/vacationsdirect/home.page';
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { DateUtil } from 'test/Utility/dateUtil';
import { HomePageData } from 'test/data/homePageData';
const homePage = new HomePage();
const hotelPage = new HotelPage();
const dateUtil = new DateUtil();
const homePageData = new HomePageData();
describe('Verify functionality on hotel search', () => {

    before(() => {
        homePage.open();
        console.log('Navigated to browser');
        homePage.clickOnHotelTab();
        console.log('Clicked on hotel tab');
        const twoDaysAfterDate = dateUtil.getFutureDate({dateFormat:'MM/dd/yy', daysToAdd:2});
        const threeDaysAfterDate = dateUtil.getFutureDate({dateFormat:'MM/dd/yy', daysToAdd:3})
        homePage.searchDestination(homePageData.hotel.search.destination, twoDaysAfterDate, threeDaysAfterDate, '');
       
      });

    it('Verify star filter', () => {
        hotelPage.clickStarRating();
        hotelPage.getStarRatingOf1stHotel();
    });

    it ('Verify hotel name filer', ()=> {
        hotelPage.clickHotelName();
        hotelPage.getHotelNames();

    });
});
