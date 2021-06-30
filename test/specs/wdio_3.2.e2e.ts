
import { HomePage } from '../pageobjects/vacationsdirect/home.page';
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { HomePageData } from '../data/homePageData';
import { DateUtil } from '../Utility/dateUtil';
const homePage = new HomePage();
const hotelPage = new HotelPage();
const homePageData = new HomePageData();
const dateUtil = new DateUtil();
var assert = require('assert');
describe('Verify functionality on hotel search', () => {

    before(() => {
    homePage.openUrlAndSearchHotel();
      });
    it('Verify result present on the page have same search location.', () => {
        assert( hotelPage.getCityTextInResults().includes(homePageData.hotel.search.destination.split("," ,1)[0]));
    });

    it('Verify hotel search results', () => {
        assert( hotelPage.getHotelResultsCount().includes("171"));
    });
    it('Verify wayfinder results after search', () => {
        assert(hotelPage.getWayFinderDetails().includes("Las Vegas, NV (LAS)"));
        console.log("homePage.checkInActualValue "+homePage.checkInActualValue);
        console.log("homePage.checkOutActualValue "+homePage.checkOutActualValue);
    });
});
