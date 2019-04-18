"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var person_1 = require("../../shared/person/person");
var dialogs = require("tns-core-modules/ui/dialogs");
var ViewGroupsComponent = /** @class */ (function () {
    function ViewGroupsComponent(router, page) {
        this.router = router;
        this.page = page;
        this.groupsDisplay = [];
        ///for testing
        this.person = new person_1.Person("logan", 'swartz');
    }
    ViewGroupsComponent.prototype.ngOnInit = function () {
        this.loadGroups();
    };
    ViewGroupsComponent.prototype.loadGroups = function () {
        var testGroupList = ['LogansGroup', 'TavisGroup', 'RyansGroup', 'KevinsGroup'];
        this.person.addGroups(testGroupList);
        for (var i in this.person.getGroups()) {
            this.groupsDisplay[i] = this.person.getGroups()[i].groupName;
        }
    };
    ViewGroupsComponent.prototype.onTapBack = function () {
        this.router.navigate(['UserProfile']);
    };
    ViewGroupsComponent.prototype.onItemTap = function (args) {
        var selectedGroup = this.groupsDisplay[args.index];
        console.log("The following group was selected: " + selectedGroup);
        var navigationExtras = {
            queryParams: {
                "groupName": selectedGroup
            }
        };
        this.router.navigate(['GroupProfile'], navigationExtras);
    };
    ViewGroupsComponent.prototype.onTapCreateGroup = function () {
        this.groupCreationDialog();
    };
    ViewGroupsComponent.prototype.groupCreationDialog = function () {
        var _this = this;
        dialogs.prompt({
            title: "Create Your Group!",
            message: "Enter Your Group Name Below",
            okButtonText: "Create",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral text",
            // defaultText: "Default text",
            inputType: dialogs.inputType.text
        }).then(function (r) {
            if (r.text != " ") {
                console.log("Dialog result: " + r.result + ", text: " + r.text);
                //var newGroup = new Group(r.text,5) ;
                // this.groups.push(r.text) ;
                _this.person.addSingleGroup(r.text);
                for (var i in _this.person.getGroups()) {
                    _this.groupsDisplay[i] = _this.person.getGroups()[i].groupName;
                }
            }
            else {
                alert("Group Name is Required");
            }
        });
    };
    ViewGroupsComponent = __decorate([
        core_1.Component({
            selector: "ViewGroupsComponent",
            moduleId: module.id,
            templateUrl: "./ViewGroups.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], ViewGroupsComponent);
    return ViewGroupsComponent;
}());
exports.ViewGroupsComponent = ViewGroupsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld0dyb3Vwcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWaWV3R3JvdXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUU7QUFFekUsaURBQWdEO0FBRWhELHFEQUFrRDtBQUNsRCxxREFBdUQ7QUFXdkQ7SUFPSSw2QkFBMkIsTUFBYyxFQUFVLElBQVU7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFFekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUU7UUFDekIsY0FBYztRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFDRCxzQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSx3Q0FBVSxHQUFqQjtRQUVJLElBQUksYUFBYSxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUMsYUFBYSxDQUFDLENBQUU7UUFDL0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUNyQyxDQUFDO1lBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMvRCxDQUFDO0lBRUgsQ0FBQztJQUVJLHVDQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSx1Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBRWpCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXFDLGFBQWUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3ZDLFdBQVcsRUFBQztnQkFDVixXQUFXLEVBQUUsYUFBYTthQUMzQjtTQUNGLENBQUE7UUFHQSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFMUQsQ0FBQztJQUVNLDhDQUFnQixHQUF2QjtRQUVFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxpREFBbUIsR0FBMUI7UUFBQSxpQkE0QkQ7UUExQkcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNiLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxZQUFZLEVBQUUsUUFBUTtZQUN0QixnQkFBZ0IsRUFBRSxRQUFRO1lBQzNCLHFDQUFxQztZQUNyQywrQkFBK0I7WUFDOUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUVQLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQ2pCLENBQUM7Z0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hFLHNDQUFzQztnQkFDdkMsNkJBQTZCO2dCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUU7Z0JBQ3BDLEdBQUcsQ0FBQSxDQUFFLElBQUksQ0FBQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDdEMsQ0FBQztvQkFDQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUMvRCxDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksQ0FDSixDQUFDO2dCQUNDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFFO1lBQ25DLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFuRlEsbUJBQW1CO1FBVC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUJBQW1CO1NBSW5DLENBQUM7eUNBU3FDLGVBQU0sRUFBZ0IsV0FBSTtPQVBwRCxtQkFBbUIsQ0FxRi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXJGRCxJQXFGQztBQXJGWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCxOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvdXAvZ3JvdXBcIjtcclxuaW1wb3J0IHtQZXJzb259IGZyb20gXCIuLi8uLi9zaGFyZWQvcGVyc29uL3BlcnNvblwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiVmlld0dyb3Vwc0NvbXBvbmVudFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vVmlld0dyb3Vwcy5odG1sXCIsXHJcbiAgICAvL3N0eWxlVXJsczpbXCJcIl0sXHJcbiAgICAvKnRlbXBsYXRlOiBgXHJcbiAgICBgKi9cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3R3JvdXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgLy9ncm91cHM6IEdyb3VwW107IFxyXG4gICAgZ3JvdXBzRGlzcGxheTogc3RyaW5nW10gOyBcclxuICAgIHBlcnNvbjogUGVyc29uOyBcclxuICAgIFxyXG4gICBcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ncm91cHNEaXNwbGF5ID0gW10gOyBcclxuICAgICAgICAvLy9mb3IgdGVzdGluZ1xyXG4gICAgICAgIHRoaXMucGVyc29uID0gbmV3IFBlcnNvbihcImxvZ2FuXCIsJ3N3YXJ0eicpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIG5nT25Jbml0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxvYWRHcm91cHMoKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRHcm91cHMoKVxyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IHRlc3RHcm91cExpc3QgPSBbJ0xvZ2Fuc0dyb3VwJywgJ1RhdmlzR3JvdXAnLCAnUnlhbnNHcm91cCcsJ0tldmluc0dyb3VwJ10gO1xyXG4gICAgICAgIHRoaXMucGVyc29uLmFkZEdyb3Vwcyh0ZXN0R3JvdXBMaXN0KTtcclxuICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLnBlcnNvbi5nZXRHcm91cHMoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLmdyb3Vwc0Rpc3BsYXlbaV0gPSB0aGlzLnBlcnNvbi5nZXRHcm91cHMoKVtpXS5ncm91cE5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXBCYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnVXNlclByb2ZpbGUnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKXtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHRoaXMuZ3JvdXBzRGlzcGxheVthcmdzLmluZGV4XTsgXHJcbiAgICAgICBjb25zb2xlLmxvZyhgVGhlIGZvbGxvd2luZyBncm91cCB3YXMgc2VsZWN0ZWQ6ICR7c2VsZWN0ZWRHcm91cH1gKTtcclxuICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICBxdWVyeVBhcmFtczp7XHJcbiAgICAgICAgICAgXCJncm91cE5hbWVcIjogc2VsZWN0ZWRHcm91cFxyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0dyb3VwUHJvZmlsZSddLG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBvblRhcENyZWF0ZUdyb3VwKClcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBDcmVhdGlvbkRpYWxvZygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgZ3JvdXBDcmVhdGlvbkRpYWxvZygpXHJcbiAgICAgIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJDcmVhdGUgWW91ciBHcm91cCFcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgWW91ciBHcm91cCBOYW1lIEJlbG93XCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ3JlYXRlXCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsIHRleHRcIixcclxuICAgICAgICAgLy8gZGVmYXVsdFRleHQ6IFwiRGVmYXVsdCB0ZXh0XCIsXHJcbiAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgICAgfSkudGhlbihyID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHIudGV4dCAhPSBcIiBcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xyXG4gICAgICAgICAgLy92YXIgbmV3R3JvdXAgPSBuZXcgR3JvdXAoci50ZXh0LDUpIDtcclxuICAgICAgICAgLy8gdGhpcy5ncm91cHMucHVzaChyLnRleHQpIDtcclxuICAgICAgICAgIHRoaXMucGVyc29uLmFkZFNpbmdsZUdyb3VwKHIudGV4dCkgO1xyXG4gICAgICAgICAgZm9yKCBsZXQgaSBpbiB0aGlzLnBlcnNvbi5nZXRHcm91cHMoKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ncm91cHNEaXNwbGF5W2ldID0gdGhpcy5wZXJzb24uZ2V0R3JvdXBzKClbaV0uZ3JvdXBOYW1lOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhbGVydChcIkdyb3VwIE5hbWUgaXMgUmVxdWlyZWRcIikgOyBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgICBcclxufSJdfQ==