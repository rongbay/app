import {Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core' ; 
import {Router} from "@angular/router";
//import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
//import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { SearchBar } from "tns-core-modules/ui/search-bar";

@Component ({
selector: "AdminViewComponent",
moduleId: module.id,
templateUrl: "./AdminView.html",
//styleUrls:["./AdminView.css"],
})

export class AdminViewComponent   {

  private _mainContentText: string;
    public constructor(private router: Router,private _changeDetectionRef: ChangeDetectorRef){

      

    }

    public onTapBack()
    {
      this.router.navigate(["TempNavigation"]);
    }

    public onTapManage()
    {
      this.router.navigate(["ManageAccounts"])
    }


    //======================================================
    // Side Drawer functions 
    /*@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.mainContentText = '' ; 
         //"SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

  */
   
}
