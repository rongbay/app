import {Component} from '@angular/core' ; 
import {Router} from "@angular/router"

@Component ({
selector: "TempNavigationComponent",
moduleId: module.id,
templateUrl: "./TempNavigation.html",

})

export class TempNavigationComponent{
public constructor(private router: Router){

}

public onTap(){
    this.router.navigate(["login"]);
}

public onTapUser(){
    this.router.navigate(["UserProfile"]);
}

public onTapGroup(){
    this.router.navigate(["GroupProfile"]);
}

public onTapAdmin(){
    this.router.navigate(["AdminView"]);
}
public onTapRestaurant(){
    this.router.navigate(["RestaurantProfile"]);
}

public onTapRegister(){
this.router.navigate(["Register"])
}
public onTapTest()
{
    this.router.navigate(['list'])
}

}