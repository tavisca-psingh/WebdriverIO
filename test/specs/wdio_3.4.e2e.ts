
import { HomePage } from '../pageobjects/vacationsdirect/home.page';
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { HomePageData } from '../data/homePageData';
import { HotelResultsDetails } from '../pageobjects/vacationsdirect/hotelResultsDetails';
const homePage = new HomePage();
const hotelPage = new HotelPage();
const homePageData = new HomePageData();
const hotelResultsDetails = new HotelResultsDetails();
var assert = require('assert');
describe('Verify functionality on hotel search', () => {

    before(() => {
    homePage.openUrlAndSearchHotel();
      });
    it('Verify hotel name and star rating of any random selected hotel on hotel details page @Smoke', () => {
        hotelPage.clickOnFirstHotel();
        console.log("hotelResultsDetails.getHotelName(): "+ hotelResultsDetails.getHotelName());
        console.log("hotelPage.getStarRatings() "+hotelPage.getFirstHotelName());

        console.log("hotelResultsDetails.getStarRatings(): "+ hotelResultsDetails.getStarRatings());
        console.log("hotelPage.getStarRatings() "+hotelPage.getStarRatingOf1stHotel());

        assert(hotelResultsDetails.getHotelName() === hotelPage.getFirstHotelName());
        assert(hotelResultsDetails.getStarRatings() === hotelPage.getStarRatingOf1stHotel());
    });

    it('Verify room availability of selected hotel @Regression', () => {
        assert(hotelResultsDetails.getRoomAvailablesCount() > 0);
    });
});
