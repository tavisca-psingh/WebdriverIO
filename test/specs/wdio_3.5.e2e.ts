
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
    it('Get hotel name and start ratings in page of hotel search results', () => {
      hotelPage.clickPaginationLinksAndPrintStarRatingsOfAllHotels();
    });
});
