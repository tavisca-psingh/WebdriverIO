import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { HotelResultsPage } from '../pageobjects/vacationsdirect/hotelResults.page';
const hotelPage = new HotelPage();
const hotelResultsPage = new HotelResultsPage();
var assert = require('assert');
describe('Verify functionality on hotel search', () => {

    before(() => {
        hotelPage.openUrlAndSearchHotel();  
      });

    it('Verify star filter @Regression', () => {
        hotelResultsPage.clickStarRating();
        assert(hotelResultsPage.getAttributeStarRating().includes("desc"));
        hotelResultsPage.clickStarRating();
        assert(hotelResultsPage.getAttributeStarRating().includes("asc"));
        hotelResultsPage.setStarRatingOf1stHotel();
        console.log("Star Rating: "+hotelResultsPage.getStarRatingOf1stHotel());
       // assert(hotelResultsPage.getStarRatingOf1stHotel()==="2 out of 5 total stars");
    });

    it ('Verify hotel name filer @Regression', ()=> {
        hotelResultsPage.clickHotelNameSort();
        hotelResultsPage.setFirstHotelName();
        assert(hotelResultsPage.getAttributeHotelNameSort().includes("desc"));
        console.log("First Hotel Name: "+hotelResultsPage.getFirstHotelName());
        //assert(hotelResultsPage.getFirstHotelName()==="A Fisher's Inn Motel");
    });
});
