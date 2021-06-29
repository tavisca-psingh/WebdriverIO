export class HotelPage {

   protected get hotelResultsCount() : WebdriverIO.Element { return $('h2[class=hotel-results-pagination-count-header]');}
   protected get wayFinderDetails ()  : WebdriverIO.Element {return $('div[class=wayfinder-details]');}
   protected get cityTextInResults () : WebdriverIO.Element  { return $('#HotelSearchResults>li:nth-child(1) dl:nth-of-type(2)>dd')};
   protected get starRatingSort () : WebdriverIO.Element { return $('#StarRating')}
   protected get starRatingsHotel () : WebdriverIO.Element[] { return $$('dd[class=fi-star-rating]')};
   protected get hotelNameSort () : WebdriverIO.Element { return $('button[data-qaid=Button_SortByHotelName]')}
   protected get hotelNames (): WebdriverIO.Element [] { return $$('a[class^=hotel-name]')};

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

   getStarRatingOf1stHotel (){
      console.log(this.starRatingsHotel[0].getAttribute('title'));
   }

   clickHotelName(){
       this.hotelNameSort.click();
   }
   getHotelNames(){

   }

}
