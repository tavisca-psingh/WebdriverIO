
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { HotelResultsPage } from '../pageobjects/vacationsdirect/hotelResults.page';
const hotelPage = new HotelPage();
const hotelResultsPage = new HotelResultsPage();
var assert = require('assert');
describe('Verify functionality on hotel search', () => {

    before(() => {
    hotelPage.openUrlAndSearchHotel();
      });
    it('Get hotel name and start ratings in page of hotel search results @Regression', () => {
      hotelResultsPage.clickPaginationLinksAndPrintStarRatingsOfAllHotels();
    });
});
