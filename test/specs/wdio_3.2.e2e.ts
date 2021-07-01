
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { HotelResultsPage } from '../pageobjects/vacationsdirect/hotelResults.page';
import { HotelPageData } from '../data/hotelPageData';
const hotelPage = new HotelPage();
const hotelResultsPage = new HotelResultsPage();
const hotelPageData = new HotelPageData();
var assert = require('assert');
describe('Verify functionality on hotel search', () => {

    before(() => {
        hotelPage.openUrlAndSearchHotel();
      });
    it('Verify result present on the page have same search location. @Regression', () => {
        assert( hotelResultsPage.getCityTextInResults().includes(hotelPageData.hotel.search.destination.split("," ,1)[0]));
    });

    it('Verify hotel search results @Smoke', () => {
        assert( hotelResultsPage.getHotelResultsCount().includes("171"));
    });
    it('Verify wayfinder results after search @Smoke', () => {
        assert(hotelResultsPage.getWayFinderDetails().includes("Las Vegas, NV (LAS)"));
    });
});
