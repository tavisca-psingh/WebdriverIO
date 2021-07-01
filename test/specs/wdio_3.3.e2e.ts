
import { HomePage } from '../pageobjects/vacationsdirect/home.page';
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { DateUtil } from '../Utility/dateUtil';
import { HomePageData } from '../data/homePageData';
const homePage = new HomePage();
const hotelPage = new HotelPage();
const dateUtil = new DateUtil();
const homePageData = new HomePageData();
var assert = require('assert');
describe('Verify functionality on hotel search', () => {

    before(() => {
        homePage.openUrlAndSearchHotel();  
      });

    it('Verify star filter', () => {
        hotelPage.clickStarRating();
        assert(hotelPage.getAttributeStarRating().includes("desc"));
        hotelPage.clickStarRating();
        assert(hotelPage.getAttributeStarRating().includes("asc"));
        hotelPage.setStarRatingOf1stHotel();
        console.log("Star Rating: "+hotelPage.getStarRatingOf1stHotel());
       // assert(hotelPage.getStarRatingOf1stHotel()==="2 out of 5 total stars");
    });

    it ('Verify hotel name filer', ()=> {
        hotelPage.clickHotelNameSort();
        hotelPage.setFirstHotelName();
        assert(hotelPage.getAttributeHotelNameSort().includes("desc"));
        console.log("First Hotel Name: "+hotelPage.getFirstHotelName());
        //assert(hotelPage.getFirstHotelName()==="A Fisher's Inn Motel");
    });
});
