import {Component, OnInit} from '@angular/core' ; 
import {Router,ActivatedRoute} from "@angular/router"
import {Restaurant}  from '../../shared/restaurant/restaurant'
import { groupPreference } from '~/shared/groupPrefs/groupPrefs';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component ({
selector: "RestaurantInfoComponent",
moduleId: module.id,
templateUrl: "./RestaurantInfo.html",
styleUrls:["./RestaurantInfo.css"],
})

export class RestaurantInfoComponent implements OnInit{
  restaurantName:string ;
  newRestaurant: Restaurant;
  addressDisplay : string[];
  phoneDisplay : string[];
  hoursDisplay : string[];
  InfoDisplay : string[];
  TagDisplay : string[];

  
    public constructor(private router: Router, private route: ActivatedRoute){
     // this.groupName = "LogansGroup";
      this.newRestaurant = new Restaurant (this.restaurantName,225); 
      this.addressDisplay = this.newRestaurant.getAddress();
      this.phoneDisplay = this.newRestaurant.getPhone();
      this.hoursDisplay = this.newRestaurant.getHour();
      this.InfoDisplay = this.newRestaurant.getInfo();
      this.TagDisplay = this.newRestaurant.getTag();
      this.route.queryParams.subscribe(params =>{
      this.restaurantName = params["restaurantName"]; 
      console.log(this.restaurantName); 
      });
     

    }
  ngOnInit(){

    this.loadData(); 

  }
    public onTapBack()
    {
      this.router.navigate(["RestaurantProfile"]);
    }


    ///for testing 
    public loadData()
    {
        this.newRestaurant.addAddress('2804 Airline Blvd Portsmouth, VA 23701');
        this.newRestaurant.addPhone('(757) 465-0069');
        this.newRestaurant.addHour('Mon 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Tue 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Wed 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Thu 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Fri 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Sat 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Sun 	7:00 am - 1:00 am');
        this.newRestaurant.addInfo('Gluten-Free');
        this.newRestaurant.addInfo('Take-out');
        this.newRestaurant.addInfo('Good for Kids');
        this.newRestaurant.addInfo('Good for Groups');
        this.newRestaurant.addInfo('Wifi');
        this.newRestaurant.addInfo('Accepts credit cards');
        this.newRestaurant.addInfo('Noise level: Quiet');
        this.newRestaurant.addTag('nothing');

    }



}