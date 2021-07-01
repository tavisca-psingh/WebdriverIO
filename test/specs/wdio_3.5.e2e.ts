
import { HomePage } from '../pageobjects/vacationsdirect/home.page';
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
const homePage = new HomePage();
const hotelPage = new HotelPage();
var assert = require('assert');
describe('Verify functionality on hotel search', () => {

    before(() => {
    homePage.openUrlAndSearchHotel();
      });
    it('Get hotel name and start ratings in page of hotel search results @Regression', () => {
      hotelPage.clickPaginationLinksAndPrintStarRatingsOfAllHotels();
    });
});
