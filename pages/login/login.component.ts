import { Component } from "@angular/core";
import {Router, NavigationExtras} from "@angular/router";
import {ODataConfiguration, ODataServiceFactory, ODataService}  from "angular-odata-es5";

import { FormStyle } from "@angular/common";

@Component({
  selector: "LoginComponent",
  moduleId: module.id,
  templateUrl:"./login.html", 
  styleUrls: ['./login-common.css']
})


export class LoginComponent {
  emailAddress ;
  password ; 
    public constructor(private router: Router){

    }

    public onTapSignIn(){

        if (this.emailAddress != null && this.password !=null)
        {
          alert(`Welcome Back`);
          let navigationExtras: NavigationExtras = {
            queryParams: {
            "firstName": "Nic",
            "lastName": "Logan"
          }
        }
          this.router.navigate(["Home"], navigationExtras);
        }
        
    }

    public onTapUser()
    {
      this.router.navigate(["Home"]);
    }
    public onTapBack()
    {
      this.router.navigate(["TempNavigation"]);
    }

    public onTapRegister()
    {
      this.router.navigate(["Register"]);
    }
}










