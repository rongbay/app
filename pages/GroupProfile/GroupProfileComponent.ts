import {Component, OnInit} from '@angular/core' ; 
import {Router,ActivatedRoute} from "@angular/router"
import { Group } from '../../shared/group/group'
import { groupPreference } from '~/shared/groupPrefs/groupPrefs';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component ({
selector: "GroupProfileComponent",
moduleId: module.id,
templateUrl: "./GroupProfile.html",
styleUrls:[""],
})

export class GroupProfileComponent implements OnInit{
  groupName:string ;
  //everything in this screen should 
  //be based on groupName or groupID
  newGroup: Group;
  preferencesDisplay: string[]; 
  groupsDisplay: string[]; 
  

  ngOnInit(){

    this.loadData(); 

  }
  
  
    public constructor(private router: Router, private route: ActivatedRoute){
     // this.groupName = "LogansGroup";
      this.newGroup = new Group (this.groupName,14); 
      this.preferencesDisplay = this.newGroup.getPreferences();
      this.groupsDisplay = this.newGroup.getGroupMembers();
      this.route.queryParams.subscribe(params =>{
      this.groupName = params["groupName"]; 
      console.log(this.groupName); 
      });
     

    }

    public onTapBack()
    {
      this.router.navigate(["TempNavigation"]);
    }


    ///for testing 
    public loadData()
    {
      this.newGroup.addMembers('Logan');
      this.newGroup.addMembers('Ryan');
      this.newGroup.addMembers('Tavi');
      this.newGroup.addPreferences('Gluten-Free');
      this.newGroup.addPreferences('Fresh');
      this.newGroup.addPreferences('Alcohol');

    }

    public onTapAddMembers()
    {
      //this.newGroup.addMembers('Gary');
      this.addMemberDialog()
    }
    public onTapAddPreferences()
    {
     // this.newGroup.addPreferences('Freedom');
      this.addGroupPreferenceDialog()
      //this.preferences = this.newGroup.getPreferences(); 
    }


//add member dialog
//========================================================
    public addMemberDialog()
    {
      dialogs.prompt({
        title: "Add a Member",
        message: "Enter the Members Name Below",
        okButtonText: "Add",
        cancelButtonText: "Cancel",
       // neutralButtonText: "Neutral text",
       // defaultText: "Default text",
        inputType: dialogs.inputType.text
    }).then(r => {
     
      if(r.text != " ")
      {
        console.log("Dialog result: " + r.result + ", text: " + r.text);
        this.newGroup.addMembers(r.text) ; 
      }
      else 
      {
        alert("Members Name is required") ; 
      }
    });
  }

  ///===================================================
  public addGroupPreferenceDialog()
    {
      dialogs.prompt({
        title: "Add a Group Preference",
        message: "Enter the Preference Below",
        okButtonText: "Add",
        cancelButtonText: "Cancel",
       // neutralButtonText: "Neutral text",
       // defaultText: "Default text",
        inputType: dialogs.inputType.text
    }).then(r => {
     
      if(r.text != " ")
      {
        console.log("Dialog result: " + r.result + ", text: " + r.text);
        this.newGroup.addPreferences(r.text) ; 
      }
      else 
      {
        alert("Entry Cannot be Blank") ; 
      }
    });
  }
///===================================================

}