import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd,NavigationExtras } from "@angular/router";
import { EventData } from 'tns-core-modules/ui/page/page';
import { Page } from "tns-core-modules/ui/page";
import {Group} from "../../shared/group/group";
import {Person} from "../../shared/person/person";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "ViewGroupsComponent",
    moduleId: module.id,
    templateUrl: "./ViewGroups.html",
    //styleUrls:[""],
    /*template: `
    `*/
})

export class ViewGroupsComponent implements OnInit{
    //groups: Group[]; 
    groupsDisplay: string[] ; 
    person: Person; 
    
   

    public constructor(private router: Router, private page: Page) {
        
        this.groupsDisplay = [] ; 
        ///for testing
        this.person = new Person("logan",'swartz');
      
    }
    ngOnInit()
    {
        this.loadGroups(); 
    }

    public loadGroups()
      {
        let testGroupList = ['LogansGroup', 'TavisGroup', 'RyansGroup','KevinsGroup'] ;
        this.person.addGroups(testGroupList);
       
        for(let i in this.person.getGroups())
        {
          this.groupsDisplay[i] = this.person.getGroups()[i].groupName;
        }
                   
      }

    public onTapBack() {
        this.router.navigate(['UserProfile']);
    }

    public onItemTap(args){
      
        const selectedGroup = this.groupsDisplay[args.index]; 
       console.log(`The following group was selected: ${selectedGroup}`);
       let navigationExtras: NavigationExtras = {
         queryParams:{
           "groupName": selectedGroup
         }
       }
        
    
        this.router.navigate(['GroupProfile'],navigationExtras);
       
      }

      public onTapCreateGroup()
      {
        this.groupCreationDialog();
      }

      public groupCreationDialog()
      {
        dialogs.prompt({
          title: "Create Your Group!",
          message: "Enter Your Group Name Below",
          okButtonText: "Create",
          cancelButtonText: "Cancel",
         // neutralButtonText: "Neutral text",
         // defaultText: "Default text",
          inputType: dialogs.inputType.text
      }).then(r => {
       
        if(r.text != " ")
        {
          console.log("Dialog result: " + r.result + ", text: " + r.text);
          //var newGroup = new Group(r.text,5) ;
         // this.groups.push(r.text) ;
          this.person.addSingleGroup(r.text) ;
          for( let i in this.person.getGroups())
          {
            this.groupsDisplay[i] = this.person.getGroups()[i].groupName; 
          }
        }
        else 
        {
          alert("Group Name is Required") ; 
        }
      });
    }
      
}