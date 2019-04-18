import {Component, OnInit, OnChanges} from '@angular/core' ; 
import {Router, NavigationEnd,NavigationExtras} from "@angular/router"
import { EventData } from 'tns-core-modules/ui/page/page';
import { Page } from "tns-core-modules/ui/page";
import {Restaurant} from "../../shared/restaurant/restaurant";
import {Person} from "../../shared/person/person";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component ({
selector: "RestaurantProfileComponent",
moduleId: module.id,
templateUrl: "./RestaurantProfile.html",
styleUrls:[""],
})



export class RestaurantProfileComponent implements OnInit{



  restaurantDisplay: string[];
  person: Person;


    public constructor(private router: Router, private page: Page){
      this.restaurantDisplay = [];
      this.person = new Person("logan", 'swartz');
    }

    ngOnInit()
    {
      this.loadRestaurant();
    }

    public loadRestaurant()
    {
      let testRestaurantList = ['Taco Bell', 'McDonald', 'Subway'];
      this.person.addRestaurant(testRestaurantList);
      for (let i in this.person.getRestaurant()){
          this.restaurantDisplay[i] = this.person.getRestaurant()[i].restaurantName;
      }
    }

    public onItemTap(args){
      const selectedRestaurant = this.restaurantDisplay[args.index];
      console.log('the following restaurant was selected:   ${selectedRestaurant}');
      let navigationExtras: NavigationExtras = {
          queryParams: {
              "restaurantName": selectedRestaurant
          }
      }
      this.router.navigate(['RestaurantInfo'], navigationExtras);
  }

    public onTapBack()
    {
      this.router.navigate(["TempNavigation"]);
    }

    public onTapSearch()
    {
      this.router.navigate(["SearchRestaurant"]);
    }
}