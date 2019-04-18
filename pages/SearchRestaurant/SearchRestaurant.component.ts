import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {Router, NavigationEnd,NavigationExtras} from "@angular/router"
import { EventData } from 'tns-core-modules/ui/page/page';
import { Page } from "tns-core-modules/ui/page";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import {Restaurant}  from '../../shared/restaurant/restaurant';
import { Person } from '../../shared/person/person';
import { ObservableArray } from "tns-core-modules/data/observable-array";


class DataItem {
    constructor(public name: string, public id: string) { }
}

@Component({
    selector: "SearchRestaurantComponent",
    moduleId: module.id,
    templateUrl: "./SearchRestaurant.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchRestaurantComponent {
    //private arrayItems: Array<DataItem> = [];
    //public myItems: ObservableArray<DataItem> = new ObservableArray<DataItem>();
    myItems: string[];
    arrayItems: string[];

    public constructor(private router: Router, private page: Page) {
        //this.arrayItems.push(new DataItem("United States", "220"));
       // this.arrayItems.push(new DataItem("Bulgaria", "221"));
       // this.arrayItems.push(new DataItem("Germany", "222"));
       // this.arrayItems.push(new DataItem("Denmark", "223"));
       // this.arrayItems.push(new DataItem("India", "224"));
       // this.arrayItems.push(new DataItem("Spain", "225"));
       // this.arrayItems.push(new DataItem("Italy", "226"));
        this.myItems = [];
        this.arrayItems = [];
        //this.myItems = new ObservableArray<DataItem>(this.arrayItems);
    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        let searchValue = searchBar.text.toLowerCase();
        this.arrayItems = [' 220', '221','222'];
       // this.myItems = new ObservableArray<DataItem>();
        if (searchValue !== "") {
            for (let i = 0; i < this.arrayItems.length; i++) {
                if (this.arrayItems[i] == searchValue) {
                    
                    this.myItems.push(this.arrayItems[i]);
                }
            }
        }
    }

    public onClear(args) {
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Search for a country and press enter";

        //this.myItems = new ObservableArray<DataItem>();
        this.arrayItems.forEach(item => {
            this.myItems.push(item);
        });
    }

    public onTapBack()
    {
      this.router.navigate(["RestaurantProfile"]);
    }

}
