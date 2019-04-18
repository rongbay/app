import {Component} from '@angular/core' ; 
import {Router} from "@angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component ({
selector: "ManageAccountsComponent",
moduleId: module.id,
templateUrl: "./ManageAccounts.html",

})

export class ManageAccountsComponent{

    searchTarget: string; 
    targets :string[] ; 
    foundTargets:string[];
    
    public constructor(private router: Router){

        this.targets = ['logan','ryan','tavi','mike', 'Liz','Sam'];
        this.foundTargets =[]; 
        
    }

    public onTapBack()
    {
        this.router.navigate(["AdminView"]); 
    }

    public onTapSearch()
    { 

        let sActualTarget = this.searchTarget.toLowerCase();
        let found = false;  
        for(let i in this.targets)
        {
            if(this.targets[i].toLowerCase() == sActualTarget)
            {
                console.log('Target Found: '+ this.targets[i]);
                this.searchTarget = "" ; 
                this.foundTargets[0] = this.targets[i] ; 
                found = true; 
                break ;
            }
        }
            if(!found) 
            {
                alert("Username "+ this.searchTarget + " was not found");
                this.searchTarget = "" ; 
            }
            
    }

    public onItemTap(args)
    {
        //need to decide between naviation back to a user profile
        //or display admin options from this page 
        this.router.navigate(['UserProfile']);
    }


      //=============================================================
    // search bar functions
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
        this.searchTarget = searchBar.text;
        let sActualTarget = this.searchTarget.toLowerCase();
        let found = false;  
        for(let i in this.targets)
        {
            if(this.targets[i].toLowerCase() == sActualTarget)
            {
                console.log('Target Found: '+ this.targets[i]);
                this.searchTarget = "" ; 
                this.foundTargets[0] = this.targets[i] ; 
                found = true; 
                break ;
            }
        }
            if(!found) 
            {
                alert("Username "+ this.searchTarget + " was not found");
                this.searchTarget = "" ; 
            }
    }
  
    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }

    public onTapDisable()
    {
        dialogs.prompt({
            title: "Disable Account Confirmation",
            message: "WARNING: Are you sure you want to disable the account?",
            okButtonText: "Yes",
            cancelButtonText: "No",
        }).then(r => {
         if(r.result == true)
         {
            console.log("Dialog result: " + r.result + ", text: " + r.text);
           alert('Account was disabled');
           ///account disable logic 
         }
         else 
         {
            alert('Account has not been disabled'); 
         }
                      
        });
    }

    public onTapDelete()
    {
        dialogs.prompt({
            title: "Delete Account Confirmation",
            message: "WARNING: Are you sure you want to delete the account?",
            okButtonText: "Yes",
            cancelButtonText: "No",
           
        }).then(r => {
         if(r.result == true)
         {
            console.log("Dialog result: " + r.result + ", text: " + r.text);
            //account deletion logic
           alert('Account was deleted'); 
         }
         else 
         {
            alert('Account has not been deleted'); 
         }
                      
        });
    }
}