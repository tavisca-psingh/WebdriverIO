export class HotelPage {

   protected get hotelResultsCount() : WebdriverIO.Element { return $('h2[class=hotel-results-pagination-count-header]');}
   protected get wayFinderDetails ()  : WebdriverIO.Element {return $('div[class=wayfinder-details]');}
   protected get cityTextInResults () : WebdriverIO.Element  { return $('#HotelSearchResults>li:nth-child(1) dl:nth-of-type(2)>dd')};
   protected get starRatingSort () : WebdriverIO.Element { return $('#StarRating')}
   protected get starRatingsHotel () : WebdriverIO.Element[] { return $$('dd[class=fi-star-rating]')};
   protected get hotelNameSort () : WebdriverIO.Element { return $('button[data-qaid=Button_SortByHotelName]')}
   protected get hotelNames (): WebdriverIO.Element [] { return $$('a[class^=hotel-name]')};

   private firstHotelName : string;
   private startRatingOfFirstHotel : string;
   getHotelResultsCount(): string{
       return this.hotelResultsCount.getText();
   }
    getCityTextInResults(): string{
       return this.cityTextInResults.getText();
   }
    getWayFinderDetails(): string{
       return this.wayFinderDetails.getText();
   }
   clickStarRating(){
       this.starRatingSort.click();
   }

   getStarRatingOf1stHotel (): string{
      return this.startRatingOfFirstHotel;
   }

   setStarRatingOf1stHotel(){
       this.startRatingOfFirstHotel = this.starRatingsHotel[0].getAttribute('title').trim();
   }

   clickHotelNameSort(){
       this.hotelNameSort.click();
   }
   getHotelNames(){

   }
   clickOnFirstHotel(){
       this.hotelNames[0].click();
       this.setFirstHotelName();
       this.setStarRatingOf1stHotel();
       this.waitForHotelResultsDetailsToLoad(10000);
       }
   getFirstHotelName(): string{
      return this.firstHotelName;
   }

   setFirstHotelName() {
    this.firstHotelName = this.hotelNames[0].getText().trim();
   }

   waitForHotelResultsDetailsToLoad(timeoutInSec: number){
    browser.waitUntil(()=> $('a[data-scroll-target=hotelInformation]').isDisplayed(),
    {
        timeout: timeoutInSec,
        timeoutMsg: `Page is not loaded after ${timeoutInSec} seconds.`
    });
   }

}
