
import { HomePage } from '../pageobjects/vacationsdirect/home.page';
import { HotelPage } from '../pageobjects/vacationsdirect/hotel.page';
import { format, addDays } from 'date-fns';
const homePage = new HomePage();
const hotelPage = new HotelPage();
describe('Verify functionality on hotel search', () => {

    it('Verify hotel search results', () => {
        browser.navigateTo('https://vacationsdirect.com/');
        console.log('Navigated to browser');
        homePage.clickOnHotelTab();
        console.log('Clicked on hotel tab');
        const twoDaysAfterDate = format(addDays(new Date(), 1), 'MM/dd/yy');
        const threeDaysAfterDate = format(addDays(new Date(), 2), 'MM/dd/yy');
        homePage.searchDestination('Las Vegas, NV, US', twoDaysAfterDate, threeDaysAfterDate, '');
        hotelPage.getCityTextInResults();
        hotelPage.getWayFinderDetails();
        hotelPage.getHotelResultsCount();
    });
});
