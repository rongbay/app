import {Component, OnInit, OnChanges,ChangeDetectorRef,ViewChild} from '@angular/core' ; 
import {Router, NavigationEnd,ActivatedRoute} from "@angular/router" ;
import { EventData } from 'tns-core-modules/ui/page/page';
import {Page} from "tns-core-modules/ui/page";
import {Group} from "../../shared/group/group";
//import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
//import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as dialogs from "tns-core-modules/ui/dialogs";
import {Data} from '../../shared/providers/data/data' ; 
import {Person}from '../../shared/person/person';
import { personalPref } from '~/shared/personalPref/personalPref';







@Component ({
selector: "UserProfileComponent",
moduleId: module.id,
templateUrl: "./UserProfile.html",
styleUrls:["UserProfile.css"],
/*template: `
`*/
})

 

export class UserProfileComponent implements OnInit{

  TestBtn ; 

  
  person: Person;
  
  groupsDisplay: string[];
  preferences: string[];
  //preferences: personalPref[];
  public firstName: string;
  public lastName: string;
  private _mainContentText: string;
  
  
    public constructor(private data: Data, private router: Router, private page: Page, private route: ActivatedRoute,private _changeDetectionRef: ChangeDetectorRef){
      this.route.queryParams.subscribe(params =>{

        this.firstName = params["firstName"] ; 
        this.lastName = params["lastName"] ;
        this.data.storage = "Logan" ; 
        this.person = new Person("logan",'swartz');
        
      

      });
        //this.preferences =['Seafood','Italian','Mexican']; 
      this.preferences = [] ;
      this.groupsDisplay= []; 
    }

   
    public onItemTap(args){
      //console.log(`The following Person was chosen: ${args.index}`);
      const selectedGroup = this.groupsDisplay[args.index]; 
     // console.log(`The following group was selected: ${selectedGroup.groupName}`);
     
    }

    public onTapBack()
    {
      this.router.navigate(["TempNavigation"]);
     
    }
    public onTapTest()
    {
      ///for testing 
     
    }

   /*public onTapGroupBtn()
    {
      this.router.navigate(['ViewGroups'])
    }*/
  
    ///load the data from the person object into the list for display
    public loadPreferences()
    {
      ///will use the webservice to load these values
      //this.preferences =  ['Seafood','Italian','Mexican','NoNuts','Fast Food','Sit Down','Fancy'];
      let testList = ['Seafood','Italian','Mexican','NoNuts','Fast Food','Sit Down','Fancy'];
      this.person.addPreference(testList);
      
      for(let i in this.person.getPreferences())
      {
        this.preferences[i] = this.person.getPreferences()[i].name;
      }

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
      ///will use the webservice to load these values
  /*   this.groups = [
      {groupName: 'LogansGroup', groupID: 1},
      {groupName: 'TavisGroup', groupID: 2},
      {groupName:'RyansGroup', groupID: 3},
      {groupName:'MikesGroup', groupID: 4} ,
      {groupName:'DansGroup', groupID: 5} ,
      {groupName:'SamsGroup', groupID: 6} 

    ] ;*/
    

    
  

    ///===========================================
    /// side drawer functions
      // Side Drawer functions 
     // @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
     // private drawer: RadSideDrawer;
  
      ngAfterViewInit() {
         // this.drawer = this.drawerComponent.sideDrawer;
          this._changeDetectionRef.detectChanges();
      }
  
      ngOnInit() {
          this.mainContentText = '' ; 
          this.loadPreferences(); 
          this.loadGroups(); 
          console.log("ngOnInit() has run");
           //"SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
      }
  
      get mainContentText() {
          return this._mainContentText;
      }
  
      set mainContentText(value: string) {
          this._mainContentText = value;
      }
  
      public openDrawer() {
         // this.drawer.showDrawer();
      }
  
      public onCloseDrawerTap() {
         // this.drawer.closeDrawer();
      }

      public onGroupTap()
      {
        this.router.navigate(['ViewGroups']);
      }
      public onManagePrefsTap()
      {
        this.router.navigate(['ManagePreferences']);
      }
      public onHomeTap()
      {
        this.router.navigate(['Home']) ; 
      }

      public onTapFeedback()
      {
        this.router.navigate(['Feedback']); 
      }
    
    
}