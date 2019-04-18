"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var group_1 = require("../../shared/group/group");
var dialogs = require("tns-core-modules/ui/dialogs");
var GroupProfileComponent = /** @class */ (function () {
    function GroupProfileComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        // this.groupName = "LogansGroup";
        this.newGroup = new group_1.Group(this.groupName, 14);
        this.preferencesDisplay = this.newGroup.getPreferences();
        this.groupsDisplay = this.newGroup.getGroupMembers();
        this.route.queryParams.subscribe(function (params) {
            _this.groupName = params["groupName"];
            console.log(_this.groupName);
        });
    }
    GroupProfileComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    GroupProfileComponent.prototype.onTapBack = function () {
        this.router.navigate(["TempNavigation"]);
    };
    ///for testing 
    GroupProfileComponent.prototype.loadData = function () {
        this.newGroup.addMembers('Logan');
        this.newGroup.addMembers('Ryan');
        this.newGroup.addMembers('Tavi');
        this.newGroup.addPreferences('Gluten-Free');
        this.newGroup.addPreferences('Fresh');
        this.newGroup.addPreferences('Alcohol');
    };
    GroupProfileComponent.prototype.onTapAddMembers = function () {
        //this.newGroup.addMembers('Gary');
        this.addMemberDialog();
    };
    GroupProfileComponent.prototype.onTapAddPreferences = function () {
        // this.newGroup.addPreferences('Freedom');
        this.addGroupPreferenceDialog();
        //this.preferences = this.newGroup.getPreferences(); 
    };
    //add member dialog
    //========================================================
    GroupProfileComponent.prototype.addMemberDialog = function () {
        var _this = this;
        dialogs.prompt({
            title: "Add a Member",
            message: "Enter the Members Name Below",
            okButtonText: "Add",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral text",
            // defaultText: "Default text",
            inputType: dialogs.inputType.text
        }).then(function (r) {
            if (r.text != " ") {
                console.log("Dialog result: " + r.result + ", text: " + r.text);
                _this.newGroup.addMembers(r.text);
            }
            else {
                alert("Members Name is required");
            }
        });
    };
    ///===================================================
    GroupProfileComponent.prototype.addGroupPreferenceDialog = function () {
        var _this = this;
        dialogs.prompt({
            title: "Add a Group Preference",
            message: "Enter the Preference Below",
            okButtonText: "Add",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral text",
            // defaultText: "Default text",
            inputType: dialogs.inputType.text
        }).then(function (r) {
            if (r.text != " ") {
                console.log("Dialog result: " + r.result + ", text: " + r.text);
                _this.newGroup.addPreferences(r.text);
            }
            else {
                alert("Entry Cannot be Blank");
            }
        });
    };
    GroupProfileComponent = __decorate([
        core_1.Component({
            selector: "GroupProfileComponent",
            moduleId: module.id,
            templateUrl: "./GroupProfile.html",
            styleUrls: [""],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], GroupProfileComponent);
    return GroupProfileComponent;
}());
exports.GroupProfileComponent = GroupProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBQcm9maWxlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBQcm9maWxlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUFxRDtBQUNyRCxrREFBZ0Q7QUFFaEQscURBQXVEO0FBU3ZEO0lBZ0JJLCtCQUEyQixNQUFjLEVBQVUsS0FBcUI7UUFBeEUsaUJBV0M7UUFYMEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3ZFLGtDQUFrQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBSyxDQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDdkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFHTCxDQUFDO0lBbEJILHdDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFbEIsQ0FBQztJQWdCUSx5Q0FBUyxHQUFoQjtRQUVFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxlQUFlO0lBQ1Isd0NBQVEsR0FBZjtRQUVFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxD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NEJBQUM7Q0FBQSxBQWhIRCxJQWdIQztBQWhIWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJyA7IFxyXG5pbXBvcnQge1JvdXRlcixBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2dyb3VwL2dyb3VwJ1xyXG5pbXBvcnQgeyBncm91cFByZWZlcmVuY2UgfSBmcm9tICd+L3NoYXJlZC9ncm91cFByZWZzL2dyb3VwUHJlZnMnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQgKHtcclxuc2VsZWN0b3I6IFwiR3JvdXBQcm9maWxlQ29tcG9uZW50XCIsXHJcbm1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbnRlbXBsYXRlVXJsOiBcIi4vR3JvdXBQcm9maWxlLmh0bWxcIixcclxuc3R5bGVVcmxzOltcIlwiXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91cFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgZ3JvdXBOYW1lOnN0cmluZyA7XHJcbiAgLy9ldmVyeXRoaW5nIGluIHRoaXMgc2NyZWVuIHNob3VsZCBcclxuICAvL2JlIGJhc2VkIG9uIGdyb3VwTmFtZSBvciBncm91cElEXHJcbiAgbmV3R3JvdXA6IEdyb3VwO1xyXG4gIHByZWZlcmVuY2VzRGlzcGxheTogc3RyaW5nW107IFxyXG4gIGdyb3Vwc0Rpc3BsYXk6IHN0cmluZ1tdOyBcclxuICBcclxuXHJcbiAgbmdPbkluaXQoKXtcclxuXHJcbiAgICB0aGlzLmxvYWREYXRhKCk7IFxyXG5cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpe1xyXG4gICAgIC8vIHRoaXMuZ3JvdXBOYW1lID0gXCJMb2dhbnNHcm91cFwiO1xyXG4gICAgICB0aGlzLm5ld0dyb3VwID0gbmV3IEdyb3VwICh0aGlzLmdyb3VwTmFtZSwxNCk7IFxyXG4gICAgICB0aGlzLnByZWZlcmVuY2VzRGlzcGxheSA9IHRoaXMubmV3R3JvdXAuZ2V0UHJlZmVyZW5jZXMoKTtcclxuICAgICAgdGhpcy5ncm91cHNEaXNwbGF5ID0gdGhpcy5uZXdHcm91cC5nZXRHcm91cE1lbWJlcnMoKTtcclxuICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+e1xyXG4gICAgICB0aGlzLmdyb3VwTmFtZSA9IHBhcmFtc1tcImdyb3VwTmFtZVwiXTsgXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBOYW1lKTsgXHJcbiAgICAgIH0pO1xyXG4gICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXBCYWNrKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiVGVtcE5hdmlnYXRpb25cIl0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy9mb3IgdGVzdGluZyBcclxuICAgIHB1YmxpYyBsb2FkRGF0YSgpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMubmV3R3JvdXAuYWRkTWVtYmVycygnTG9nYW4nKTtcclxuICAgICAgdGhpcy5uZXdHcm91cC5hZGRNZW1iZXJzKCdSeWFuJyk7XHJcbiAgICAgIHRoaXMubmV3R3JvdXAuYWRkTWVtYmVycygnVGF2aScpO1xyXG4gICAgICB0aGlzLm5ld0dyb3VwLmFkZFByZWZlcmVuY2VzKCdHbHV0ZW4tRnJlZScpO1xyXG4gICAgICB0aGlzLm5ld0dyb3VwLmFkZFByZWZlcmVuY2VzKCdGcmVzaCcpO1xyXG4gICAgICB0aGlzLm5ld0dyb3VwLmFkZFByZWZlcmVuY2VzKCdBbGNvaG9sJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRhcEFkZE1lbWJlcnMoKVxyXG4gICAge1xyXG4gICAgICAvL3RoaXMubmV3R3JvdXAuYWRkTWVtYmVycygnR2FyeScpO1xyXG4gICAgICB0aGlzLmFkZE1lbWJlckRpYWxvZygpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25UYXBBZGRQcmVmZXJlbmNlcygpXHJcbiAgICB7XHJcbiAgICAgLy8gdGhpcy5uZXdHcm91cC5hZGRQcmVmZXJlbmNlcygnRnJlZWRvbScpO1xyXG4gICAgICB0aGlzLmFkZEdyb3VwUHJlZmVyZW5jZURpYWxvZygpXHJcbiAgICAgIC8vdGhpcy5wcmVmZXJlbmNlcyA9IHRoaXMubmV3R3JvdXAuZ2V0UHJlZmVyZW5jZXMoKTsgXHJcbiAgICB9XHJcblxyXG5cclxuLy9hZGQgbWVtYmVyIGRpYWxvZ1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBwdWJsaWMgYWRkTWVtYmVyRGlhbG9nKClcclxuICAgIHtcclxuICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgIHRpdGxlOiBcIkFkZCBhIE1lbWJlclwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIE1lbWJlcnMgTmFtZSBCZWxvd1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJBZGRcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgLy8gbmV1dHJhbEJ1dHRvblRleHQ6IFwiTmV1dHJhbCB0ZXh0XCIsXHJcbiAgICAgICAvLyBkZWZhdWx0VGV4dDogXCJEZWZhdWx0IHRleHRcIixcclxuICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgIH0pLnRoZW4ociA9PiB7XHJcbiAgICAgXHJcbiAgICAgIGlmKHIudGV4dCAhPSBcIiBcIilcclxuICAgICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB0ZXh0OiBcIiArIHIudGV4dCk7XHJcbiAgICAgICAgdGhpcy5uZXdHcm91cC5hZGRNZW1iZXJzKHIudGV4dCkgOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIFxyXG4gICAgICB7XHJcbiAgICAgICAgYWxlcnQoXCJNZW1iZXJzIE5hbWUgaXMgcmVxdWlyZWRcIikgOyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBwdWJsaWMgYWRkR3JvdXBQcmVmZXJlbmNlRGlhbG9nKClcclxuICAgIHtcclxuICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgIHRpdGxlOiBcIkFkZCBhIEdyb3VwIFByZWZlcmVuY2VcIixcclxuICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBQcmVmZXJlbmNlIEJlbG93XCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFkZFwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsIHRleHRcIixcclxuICAgICAgIC8vIGRlZmF1bHRUZXh0OiBcIkRlZmF1bHQgdGV4dFwiLFxyXG4gICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgfSkudGhlbihyID0+IHtcclxuICAgICBcclxuICAgICAgaWYoci50ZXh0ICE9IFwiIFwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcclxuICAgICAgICB0aGlzLm5ld0dyb3VwLmFkZFByZWZlcmVuY2VzKHIudGV4dCkgOyBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIFxyXG4gICAgICB7XHJcbiAgICAgICAgYWxlcnQoXCJFbnRyeSBDYW5ub3QgYmUgQmxhbmtcIikgOyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4vLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbn0iXX0=