import BasePage from "../basePage";

export class HotelResultsDetailsPage extends BasePage{

    protected get hotelName() : WebdriverIO.Element {
         return $('.hotel-details-grid-container>div>h2>span')};
    protected get starRating() : WebdriverIO.Element {
        return $('.hotel-details-star-rating-container');
    }
    protected get bookThisRoom() : WebdriverIO.Element[] {
        return $$('button[data-qaid=Button_BookRoom]');
    }

    getHotelName() : string {
        this.hotelName.waitForDisplayed();
        return this.hotelName.getText().trim();
    }

    getStarRatings(): string {
        return this.starRating.getText().trim();
    }

    getRoomAvailablesCount(): number {
        console.log("this.bookThisRoom.length: "+ this.bookThisRoom.length);
        return this.bookThisRoom.length;    
    }

}