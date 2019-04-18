import {Component, OnInit, ViewChild, ElementRef} from '@angular/core' ; 
import {Router} from "@angular/router";
import { Inject }  from '@angular/core';
import {EventData} from "tns-core-modules/data/observable" ;
import {Page, getViewById} from 'ui/page' ;  
import {Label} from 'ui/label';
import {TextField} from 'ui/text-field';
import {Button} from 'ui/button';
import { View } from "ui/core/view";
import { fromObject, fromObjectRecursive, Observable, PropertyChangeData } from "tns-core-modules/data/observable";
//import { a } from '@angular/core/src/render3';

@Component ({
selector: "RegisterComponent",
moduleId: module.id,
templateUrl: "./Register.component.html",
styleUrls: ['./register-common.css']

})

export class RegisterComponent {
  firstName; 
  lastName;
  email ; 
  city;
  country;
  state;
  password;
  confirmPassword;
  requiredFields; 
  
    public constructor(private router: Router){
      
    }
  
    public onTapBack() 
    {
      this.router.navigate(["TempNavigation"]);
    }
    
    public onTapReg()
    {
      console.log("tapped");
      ///test for blank fields
      if(this.firstName == null || this.lastName == null ||this.email == null || this.country== null || this.city == null  || this.state== null)
       {  
        alert("All fields required!");
       }
      else 
      ///test if passwords match 
        if(this.password == this.confirmPassword)
        {
          alert(`Welcome:  ${this.firstName +" "+ this.lastName}`);
          this.router.navigate(['UserProfile']);
        }

         else 
            {
         alert("Passwords do not match!") ; 
         this.password = "";
         this.confirmPassword = ""; 
            }
      }
  }






