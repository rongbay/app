import { Component } from "@angular/core";
import {Router} from "@angular/router"


import { FormStyle } from "@angular/common";

@Component({
  selector: "HomeComponent",
  moduleId: module.id,
  templateUrl:"./Home.html", 
  
})

export class HomeComponent {
    public constructor(private router: Router){

    }

    public onTapBack()
    {
          this.router.navigate(["TempNavigation"]);
    }
}