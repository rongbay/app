"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var data_1 = require("../../shared/providers/data/data");
var person_1 = require("../../shared/person/person");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(data, router, page, route, _changeDetectionRef) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.page = page;
        this.route = route;
        this._changeDetectionRef = _changeDetectionRef;
        this.route.queryParams.subscribe(function (params) {
            _this.firstName = params["firstName"];
            _this.lastName = params["lastName"];
            _this.data.storage = "Logan";
            _this.person = new person_1.Person("logan", 'swartz');
        });
        //this.preferences =['Seafood','Italian','Mexican']; 
        this.preferences = [];
        this.groupsDisplay = [];
    }
    UserProfileComponent.prototype.onItemTap = function (args) {
        //console.log(`The following Person was chosen: ${args.index}`);
        var selectedGroup = this.groupsDisplay[args.index];
        // console.log(`The following group was selected: ${selectedGroup.groupName}`);
    };
    UserProfileComponent.prototype.onTapBack = function () {
        this.router.navigate(["TempNavigation"]);
    };
    UserProfileComponent.prototype.onTapTest = function () {
        ///for testing 
    };
    /*public onTapGroupBtn()
     {
       this.router.navigate(['ViewGroups'])
     }*/
    ///load the data from the person object into the list for display
    UserProfileComponent.prototype.loadPreferences = function () {
        ///will use the webservice to load these values
        //this.preferences =  ['Seafood','Italian','Mexican','NoNuts','Fast Food','Sit Down','Fancy'];
        var testList = ['Seafood', 'Italian', 'Mexican', 'NoNuts', 'Fast Food', 'Sit Down', 'Fancy'];
        this.person.addPreference(testList);
        for (var i in this.person.getPreferences()) {
            this.preferences[i] = this.person.getPreferences()[i].name;
        }
    };
    UserProfileComponent.prototype.loadGroups = function () {
        var testGroupList = ['LogansGroup', 'TavisGroup', 'RyansGroup', 'KevinsGroup'];
        this.person.addGroups(testGroupList);
        for (var i in this.person.getGroups()) {
            this.groupsDisplay[i] = this.person.getGroups()[i].groupName;
        }
    };
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
    UserProfileComponent.prototype.ngAfterViewInit = function () {
        // this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        this.mainContentText = '';
        this.loadPreferences();
        this.loadGroups();
        console.log("ngOnInit() has run");
        //"SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    };
    Object.defineProperty(UserProfileComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    UserProfileComponent.prototype.openDrawer = function () {
        // this.drawer.showDrawer();
    };
    UserProfileComponent.prototype.onCloseDrawerTap = function () {
        // this.drawer.closeDrawer();
    };
    UserProfileComponent.prototype.onGroupTap = function () {
        this.router.navigate(['ViewGroups']);
    };
    UserProfileComponent.prototype.onManagePrefsTap = function () {
        this.router.navigate(['ManagePreferences']);
    };
    UserProfileComponent.prototype.onHomeTap = function () {
        this.router.navigate(['Home']);
    };
    UserProfileComponent.prototype.onTapFeedback = function () {
        this.router.navigate(['Feedback']);
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: "UserProfileComponent",
            moduleId: module.id,
            templateUrl: "./UserProfile.html",
            styleUrls: ["UserProfile.css"],
        }),
        __metadata("design:paramtypes", [data_1.Data, router_1.Router, page_1.Page, router_1.ActivatedRoute, core_1.ChangeDetectorRef])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlclByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBQ3hGLDBDQUFzRTtBQUV0RSxpREFBOEM7QUFLOUMseURBQXVEO0FBQ3ZELHFEQUFpRDtBQW9CakQ7SUFlSSw4QkFBMkIsSUFBVSxFQUFVLE1BQWMsRUFBVSxJQUFVLEVBQVUsS0FBcUIsRUFBUyxtQkFBc0M7UUFBL0osaUJBY0M7UUFkMEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBUyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQzdKLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFFckMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUU7WUFDdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUU7WUFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFFO1lBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBSTdDLENBQUMsQ0FBQyxDQUFDO1FBQ0QscURBQXFEO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFFO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHTSx3Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLGdFQUFnRTtRQUNoRSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0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LFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXBKTSxvQkFBb0I7UUFYaEMsZ0JBQVMsQ0FBRTtZQUNaLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFDLENBQUMsaUJBQWlCLENBQUM7U0FHNUIsQ0FBQzt5Q0FtQm1DLFdBQUksRUFBa0IsZUFBTSxFQUFnQixXQUFJLEVBQWlCLHVCQUFjLEVBQThCLHdCQUFpQjtPQWZ0SixvQkFBb0IsQ0F1SmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXZKRCxJQXVKQztBQXZKWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsQ2hhbmdlRGV0ZWN0b3JSZWYsVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJyA7IFxyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkVuZCxBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiIDtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm91cC9ncm91cFwiO1xyXG4vL2ltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG4vL2ltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy4uLy4uL3NoYXJlZC9wcm92aWRlcnMvZGF0YS9kYXRhJyA7IFxyXG5pbXBvcnQge1BlcnNvbn1mcm9tICcuLi8uLi9zaGFyZWQvcGVyc29uL3BlcnNvbic7XHJcbmltcG9ydCB7IHBlcnNvbmFsUHJlZiB9IGZyb20gJ34vc2hhcmVkL3BlcnNvbmFsUHJlZi9wZXJzb25hbFByZWYnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCAoe1xyXG5zZWxlY3RvcjogXCJVc2VyUHJvZmlsZUNvbXBvbmVudFwiLFxyXG5tb2R1bGVJZDogbW9kdWxlLmlkLFxyXG50ZW1wbGF0ZVVybDogXCIuL1VzZXJQcm9maWxlLmh0bWxcIixcclxuc3R5bGVVcmxzOltcIlVzZXJQcm9maWxlLmNzc1wiXSxcclxuLyp0ZW1wbGF0ZTogYFxyXG5gKi9cclxufSlcclxuXHJcbiBcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgVGVzdEJ0biA7IFxyXG5cclxuICBcclxuICBwZXJzb246IFBlcnNvbjtcclxuICBcclxuICBncm91cHNEaXNwbGF5OiBzdHJpbmdbXTtcclxuICBwcmVmZXJlbmNlczogc3RyaW5nW107XHJcbiAgLy9wcmVmZXJlbmNlczogcGVyc29uYWxQcmVmW107XHJcbiAgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX21haW5Db250ZW50VGV4dDogc3RyaW5nO1xyXG4gIFxyXG4gIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogRGF0YSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKXtcclxuICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+e1xyXG5cclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IHBhcmFtc1tcImZpcnN0TmFtZVwiXSA7IFxyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBwYXJhbXNbXCJsYXN0TmFtZVwiXSA7XHJcbiAgICAgICAgdGhpcy5kYXRhLnN0b3JhZ2UgPSBcIkxvZ2FuXCIgOyBcclxuICAgICAgICB0aGlzLnBlcnNvbiA9IG5ldyBQZXJzb24oXCJsb2dhblwiLCdzd2FydHonKTtcclxuICAgICAgICBcclxuICAgICAgXHJcblxyXG4gICAgICB9KTtcclxuICAgICAgICAvL3RoaXMucHJlZmVyZW5jZXMgPVsnU2VhZm9vZCcsJ0l0YWxpYW4nLCdNZXhpY2FuJ107IFxyXG4gICAgICB0aGlzLnByZWZlcmVuY2VzID0gW10gO1xyXG4gICAgICB0aGlzLmdyb3Vwc0Rpc3BsYXk9IFtdOyBcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKXtcclxuICAgICAgLy9jb25zb2xlLmxvZyhgVGhlIGZvbGxvd2luZyBQZXJzb24gd2FzIGNob3NlbjogJHthcmdzLmluZGV4fWApO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gdGhpcy5ncm91cHNEaXNwbGF5W2FyZ3MuaW5kZXhdOyBcclxuICAgICAvLyBjb25zb2xlLmxvZyhgVGhlIGZvbGxvd2luZyBncm91cCB3YXMgc2VsZWN0ZWQ6ICR7c2VsZWN0ZWRHcm91cC5ncm91cE5hbWV9YCk7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGFwQmFjaygpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlRlbXBOYXZpZ2F0aW9uXCJdKTtcclxuICAgICBcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblRhcFRlc3QoKVxyXG4gICAge1xyXG4gICAgICAvLy9mb3IgdGVzdGluZyBcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgIC8qcHVibGljIG9uVGFwR3JvdXBCdG4oKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ1ZpZXdHcm91cHMnXSlcclxuICAgIH0qL1xyXG4gIFxyXG4gICAgLy8vbG9hZCB0aGUgZGF0YSBmcm9tIHRoZSBwZXJzb24gb2JqZWN0IGludG8gdGhlIGxpc3QgZm9yIGRpc3BsYXlcclxuICAgIHB1YmxpYyBsb2FkUHJlZmVyZW5jZXMoKVxyXG4gICAge1xyXG4gICAgICAvLy93aWxsIHVzZSB0aGUgd2Vic2VydmljZSB0byBsb2FkIHRoZXNlIHZhbHVlc1xyXG4gICAgICAvL3RoaXMucHJlZmVyZW5jZXMgPSAgWydTZWFmb29kJywnSXRhbGlhbicsJ01leGljYW4nLCdOb051dHMnLCdGYXN0IEZvb2QnLCdTaXQgRG93bicsJ0ZhbmN5J107XHJcbiAgICAgIGxldCB0ZXN0TGlzdCA9IFsnU2VhZm9vZCcsJ0l0YWxpYW4nLCdNZXhpY2FuJywnTm9OdXRzJywnRmFzdCBGb29kJywnU2l0IERvd24nLCdGYW5jeSddO1xyXG4gICAgICB0aGlzLnBlcnNvbi5hZGRQcmVmZXJlbmNlKHRlc3RMaXN0KTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgaSBpbiB0aGlzLnBlcnNvbi5nZXRQcmVmZXJlbmNlcygpKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlc1tpXSA9IHRoaXMucGVyc29uLmdldFByZWZlcmVuY2VzKClbaV0ubmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEdyb3VwcygpXHJcbiAgICB7XHJcbiAgICAgIGxldCB0ZXN0R3JvdXBMaXN0ID0gWydMb2dhbnNHcm91cCcsICdUYXZpc0dyb3VwJywgJ1J5YW5zR3JvdXAnLCdLZXZpbnNHcm91cCddIDtcclxuICAgICAgdGhpcy5wZXJzb24uYWRkR3JvdXBzKHRlc3RHcm91cExpc3QpO1xyXG4gICAgIFxyXG4gICAgICBmb3IobGV0IGkgaW4gdGhpcy5wZXJzb24uZ2V0R3JvdXBzKCkpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmdyb3Vwc0Rpc3BsYXlbaV0gPSB0aGlzLnBlcnNvbi5nZXRHcm91cHMoKVtpXS5ncm91cE5hbWU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICAgIC8vL3dpbGwgdXNlIHRoZSB3ZWJzZXJ2aWNlIHRvIGxvYWQgdGhlc2UgdmFsdWVzXHJcbiAgLyogICB0aGlzLmdyb3VwcyA9IFtcclxuICAgICAge2dyb3VwTmFtZTogJ0xvZ2Fuc0dyb3VwJywgZ3JvdXBJRDogMX0sXHJcbiAgICAgIHtncm91cE5hbWU6ICdUYXZpc0dyb3VwJywgZ3JvdXBJRDogMn0sXHJcbiAgICAgIHtncm91cE5hbWU6J1J5YW5zR3JvdXAnLCBncm91cElEOiAzfSxcclxuICAgICAge2dyb3VwTmFtZTonTWlrZXNHcm91cCcsIGdyb3VwSUQ6IDR9ICxcclxuICAgICAge2dyb3VwTmFtZTonRGFuc0dyb3VwJywgZ3JvdXBJRDogNX0gLFxyXG4gICAgICB7Z3JvdXBOYW1lOidTYW1zR3JvdXAnLCBncm91cElEOiA2fSBcclxuXHJcbiAgICBdIDsqL1xyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgXHJcblxyXG4gICAgLy8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8vIHNpZGUgZHJhd2VyIGZ1bmN0aW9uc1xyXG4gICAgICAvLyBTaWRlIERyYXdlciBmdW5jdGlvbnMgXHJcbiAgICAgLy8gQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gICAgIC8vIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG4gIFxyXG4gICAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgIC8vIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgICB0aGlzLm1haW5Db250ZW50VGV4dCA9ICcnIDsgXHJcbiAgICAgICAgICB0aGlzLmxvYWRQcmVmZXJlbmNlcygpOyBcclxuICAgICAgICAgIHRoaXMubG9hZEdyb3VwcygpOyBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXQoKSBoYXMgcnVuXCIpO1xyXG4gICAgICAgICAgIC8vXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgSFRNTCBkZWZpbml0aW9uIG9mIHlvdXIgcGFnZSBieSBkZWZpbmluZyB0a0RyYXdlckNvbnRlbnQgYW5kIHRrTWFpbkNvbnRlbnQuIFRoZSBjb21wb25lbnQgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgZ2V0IG1haW5Db250ZW50VGV4dCgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9tYWluQ29udGVudFRleHQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc2V0IG1haW5Db250ZW50VGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLl9tYWluQ29udGVudFRleHQgPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcclxuICAgICAgICAgLy8gdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgICAvLyB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgb25Hcm91cFRhcCgpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ1ZpZXdHcm91cHMnXSk7XHJcbiAgICAgIH1cclxuICAgICAgcHVibGljIG9uTWFuYWdlUHJlZnNUYXAoKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydNYW5hZ2VQcmVmZXJlbmNlcyddKTtcclxuICAgICAgfVxyXG4gICAgICBwdWJsaWMgb25Ib21lVGFwKClcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKSA7IFxyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgb25UYXBGZWVkYmFjaygpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0ZlZWRiYWNrJ10pOyBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxufSJdfQ==