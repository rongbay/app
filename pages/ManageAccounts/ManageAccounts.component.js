"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var ManageAccountsComponent = /** @class */ (function () {
    function ManageAccountsComponent(router) {
        this.router = router;
        this.targets = ['logan', 'ryan', 'tavi', 'mike', 'Liz', 'Sam'];
        this.foundTargets = [];
    }
    ManageAccountsComponent.prototype.onTapBack = function () {
        this.router.navigate(["AdminView"]);
    };
    ManageAccountsComponent.prototype.onTapSearch = function () {
        var sActualTarget = this.searchTarget.toLowerCase();
        var found = false;
        for (var i in this.targets) {
            if (this.targets[i].toLowerCase() == sActualTarget) {
                console.log('Target Found: ' + this.targets[i]);
                this.searchTarget = "";
                this.foundTargets[0] = this.targets[i];
                found = true;
                break;
            }
        }
        if (!found) {
            alert("Username " + this.searchTarget + " was not found");
            this.searchTarget = "";
        }
    };
    ManageAccountsComponent.prototype.onItemTap = function (args) {
        //need to decide between naviation back to a user profile
        //or display admin options from this page 
        this.router.navigate(['UserProfile']);
    };
    //=============================================================
    // search bar functions
    ManageAccountsComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
        this.searchTarget = searchBar.text;
        var sActualTarget = this.searchTarget.toLowerCase();
        var found = false;
        for (var i in this.targets) {
            if (this.targets[i].toLowerCase() == sActualTarget) {
                console.log('Target Found: ' + this.targets[i]);
                this.searchTarget = "";
                this.foundTargets[0] = this.targets[i];
                found = true;
                break;
            }
        }
        if (!found) {
            alert("Username " + this.searchTarget + " was not found");
            this.searchTarget = "";
        }
    };
    ManageAccountsComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    ManageAccountsComponent.prototype.onTapDisable = function () {
        dialogs.prompt({
            title: "Disable Account Confirmation",
            message: "WARNING: Are you sure you want to disable the account?",
            okButtonText: "Yes",
            cancelButtonText: "No",
        }).then(function (r) {
            if (r.result == true) {
                console.log("Dialog result: " + r.result + ", text: " + r.text);
                alert('Account was disabled');
                ///account disable logic 
            }
            else {
                alert('Account has not been disabled');
            }
        });
    };
    ManageAccountsComponent.prototype.onTapDelete = function () {
        dialogs.prompt({
            title: "Delete Account Confirmation",
            message: "WARNING: Are you sure you want to delete the account?",
            okButtonText: "Yes",
            cancelButtonText: "No",
        }).then(function (r) {
            if (r.result == true) {
                console.log("Dialog result: " + r.result + ", text: " + r.text);
                //account deletion logic
                alert('Account was deleted');
            }
            else {
                alert('Account has not been deleted');
            }
        });
    };
    ManageAccountsComponent = __decorate([
        core_1.Component({
            selector: "ManageAccountsComponent",
            moduleId: module.id,
            templateUrl: "./ManageAccounts.html",
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ManageAccountsComponent);
    return ManageAccountsComponent;
}());
exports.ManageAccountsComponent = ManageAccountsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlQWNjb3VudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWFuYWdlQWNjb3VudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUF1QztBQUV2QyxxREFBdUQ7QUFTdkQ7SUFNSSxpQ0FBMkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRSxFQUFFLENBQUM7SUFFMUIsQ0FBQztJQUVNLDJDQUFTLEdBQWhCO1FBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSw2Q0FBVyxHQUFsQjtRQUdJLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FDMUIsQ0FBQztZQUNHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksYUFBYSxDQUFDLENBQ2xELENBQUM7Z0JBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFFO2dCQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUU7Z0JBQ3hDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2IsS0FBSyxDQUFFO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUFDRyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUNWLENBQUM7WUFDRyxLQUFLLENBQUMsV0FBVyxHQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBRTtRQUM1QixDQUFDO0lBRVQsQ0FBQztJQUVNLDJDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFFakIseURBQXlEO1FBQ3pELDBDQUEwQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdDLCtEQUErRDtJQUNqRSx1QkFBdUI7SUFDaEIsMENBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUMxQixDQUFDO1lBQ0csRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxhQUFhLENBQUMsQ0FDbEQsQ0FBQztnQkFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUU7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBRTtnQkFDeEMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDYixLQUFLLENBQUU7WUFDWCxDQUFDO1FBQ0wsQ0FBQztRQUNHLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ1YsQ0FBQztZQUNHLEtBQUssQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFFO1FBQzVCLENBQUM7SUFDVCxDQUFDO0lBRU0sK0NBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSw4Q0FBWSxHQUFuQjtRQUVJLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxLQUFLLEVBQUUsOEJBQThCO1lBQ3JDLE9BQU8sRUFBRSx3REFBd0Q7WUFDakUsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNSLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQ3BCLENBQUM7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pFLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUM5Qix5QkFBeUI7WUFDM0IsQ0FBQztZQUNELElBQUksQ0FDSixDQUFDO2dCQUNFLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2Q0FBVyxHQUFsQjtRQUVJLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxLQUFLLEVBQUUsNkJBQTZCO1lBQ3BDLE9BQU8sRUFBRSx1REFBdUQ7WUFDaEUsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtTQUV6QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNSLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQ3BCLENBQUM7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hFLHdCQUF3QjtnQkFDekIsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUNELElBQUksQ0FDSixDQUFDO2dCQUNFLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE1SFEsdUJBQXVCO1FBUG5DLGdCQUFTLENBQUU7WUFDWixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBRW5DLENBQUM7eUNBUXFDLGVBQU07T0FOaEMsdUJBQXVCLENBNkhuQztJQUFELDhCQUFDO0NBQUEsQUE3SEQsSUE2SEM7QUE3SFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnIDsgXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbnNlbGVjdG9yOiBcIk1hbmFnZUFjY291bnRzQ29tcG9uZW50XCIsXHJcbm1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbnRlbXBsYXRlVXJsOiBcIi4vTWFuYWdlQWNjb3VudHMuaHRtbFwiLFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VBY2NvdW50c0NvbXBvbmVudHtcclxuXHJcbiAgICBzZWFyY2hUYXJnZXQ6IHN0cmluZzsgXHJcbiAgICB0YXJnZXRzIDpzdHJpbmdbXSA7IFxyXG4gICAgZm91bmRUYXJnZXRzOnN0cmluZ1tdO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IFsnbG9nYW4nLCdyeWFuJywndGF2aScsJ21pa2UnLCAnTGl6JywnU2FtJ107XHJcbiAgICAgICAgdGhpcy5mb3VuZFRhcmdldHMgPVtdOyBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXBCYWNrKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJBZG1pblZpZXdcIl0pOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXBTZWFyY2goKVxyXG4gICAgeyBcclxuXHJcbiAgICAgICAgbGV0IHNBY3R1YWxUYXJnZXQgPSB0aGlzLnNlYXJjaFRhcmdldC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlOyAgXHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMudGFyZ2V0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0c1tpXS50b0xvd2VyQ2FzZSgpID09IHNBY3R1YWxUYXJnZXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYXJnZXQgRm91bmQ6ICcrIHRoaXMudGFyZ2V0c1tpXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRhcmdldCA9IFwiXCIgOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuZm91bmRUYXJnZXRzWzBdID0gdGhpcy50YXJnZXRzW2ldIDsgXHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWsgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighZm91bmQpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlVzZXJuYW1lIFwiKyB0aGlzLnNlYXJjaFRhcmdldCArIFwiIHdhcyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRhcmdldCA9IFwiXCIgOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpXHJcbiAgICB7XHJcbiAgICAgICAgLy9uZWVkIHRvIGRlY2lkZSBiZXR3ZWVuIG5hdmlhdGlvbiBiYWNrIHRvIGEgdXNlciBwcm9maWxlXHJcbiAgICAgICAgLy9vciBkaXNwbGF5IGFkbWluIG9wdGlvbnMgZnJvbSB0aGlzIHBhZ2UgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydVc2VyUHJvZmlsZSddKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIHNlYXJjaCBiYXIgZnVuY3Rpb25zXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGFyZ2V0ID0gc2VhcmNoQmFyLnRleHQ7XHJcbiAgICAgICAgbGV0IHNBY3R1YWxUYXJnZXQgPSB0aGlzLnNlYXJjaFRhcmdldC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlOyAgXHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMudGFyZ2V0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0c1tpXS50b0xvd2VyQ2FzZSgpID09IHNBY3R1YWxUYXJnZXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYXJnZXQgRm91bmQ6ICcrIHRoaXMudGFyZ2V0c1tpXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRhcmdldCA9IFwiXCIgOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuZm91bmRUYXJnZXRzWzBdID0gdGhpcy50YXJnZXRzW2ldIDsgXHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWsgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighZm91bmQpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlVzZXJuYW1lIFwiKyB0aGlzLnNlYXJjaFRhcmdldCArIFwiIHdhcyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRhcmdldCA9IFwiXCIgOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIG9uVGV4dENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXBEaXNhYmxlKClcclxuICAgIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRpc2FibGUgQWNjb3VudCBDb25maXJtYXRpb25cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJXQVJOSU5HOiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGlzYWJsZSB0aGUgYWNjb3VudD9cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXHJcbiAgICAgICAgfSkudGhlbihyID0+IHtcclxuICAgICAgICAgaWYoci5yZXN1bHQgPT0gdHJ1ZSlcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xyXG4gICAgICAgICAgIGFsZXJ0KCdBY2NvdW50IHdhcyBkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgIC8vL2FjY291bnQgZGlzYWJsZSBsb2dpYyBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdBY2NvdW50IGhhcyBub3QgYmVlbiBkaXNhYmxlZCcpOyBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGFwRGVsZXRlKClcclxuICAgIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRlbGV0ZSBBY2NvdW50IENvbmZpcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIldBUk5JTkc6IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIGFjY291bnQ/XCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pLnRoZW4ociA9PiB7XHJcbiAgICAgICAgIGlmKHIucmVzdWx0ID09IHRydWUpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcclxuICAgICAgICAgICAgLy9hY2NvdW50IGRlbGV0aW9uIGxvZ2ljXHJcbiAgICAgICAgICAgYWxlcnQoJ0FjY291bnQgd2FzIGRlbGV0ZWQnKTsgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydCgnQWNjb3VudCBoYXMgbm90IGJlZW4gZGVsZXRlZCcpOyBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=