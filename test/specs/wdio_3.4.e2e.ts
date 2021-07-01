
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { HotelResultsPage } from '../pageobjects/vacationsdirect/hotelResults.page';
import { HotelResultsDetailsPage } from '../pageobjects/vacationsdirect/hotelResultsDetails.page';
const hotelPage = new HotelPage();
const hotelResultsPage = new HotelResultsPage();
const hotelResultsDetailsPage = new HotelResultsDetailsPage();
var assert = require('assert');
describe('Verify functionality on hotel search', () => {

    before(() => {
    hotelPage.openUrlAndSearchHotel();
      });
    it('Verify hotel name and star rating of any random selected hotel on hotel details page @Smoke', () => {
        hotelResultsPage.clickOnFirstHotel();
        assert(hotelResultsDetailsPage.getHotelName() === hotelResultsPage.getFirstHotelName());
        assert(hotelResultsDetailsPage.getStarRatings() === hotelResultsPage.getStarRatingOf1stHotel());
    });

    it('Verify room availability of selected hotel @Regression', () => {
        assert(hotelResultsDetailsPage.getRoomAvailablesCount() > 0);
    });
});
