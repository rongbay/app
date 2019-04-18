"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var person_1 = require("../../shared/person/person");
var RestaurantProfileComponent = /** @class */ (function () {
    function RestaurantProfileComponent(router, page) {
        this.router = router;
        this.page = page;
        this.restaurantDisplay = [];
        this.person = new person_1.Person("logan", 'swartz');
    }
    RestaurantProfileComponent.prototype.ngOnInit = function () {
        this.loadRestaurant();
    };
    RestaurantProfileComponent.prototype.loadRestaurant = function () {
        var testRestaurantList = ['Taco Bell', 'McDonald', 'Subway'];
        this.person.addRestaurant(testRestaurantList);
        for (var i in this.person.getRestaurant()) {
            this.restaurantDisplay[i] = this.person.getRestaurant()[i].restaurantName;
        }
    };
    RestaurantProfileComponent.prototype.onItemTap = function (args) {
        var selectedRestaurant = this.restaurantDisplay[args.index];
        console.log('the following restaurant was selected:   ${selectedRestaurant}');
        var navigationExtras = {
            queryParams: {
                "restaurantName": selectedRestaurant
            }
        };
        this.router.navigate(['RestaurantInfo'], navigationExtras);
    };
    RestaurantProfileComponent.prototype.onTapBack = function () {
        this.router.navigate(["TempNavigation"]);
    };
    RestaurantProfileComponent.prototype.onTapSearch = function () {
        this.router.navigate(["SearchRestaurant"]);
    };
    RestaurantProfileComponent = __decorate([
        core_1.Component({
            selector: "RestaurantProfileComponent",
            moduleId: module.id,
            templateUrl: "./RestaurantProfile.html",
            styleUrls: [""],
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], RestaurantProfileComponent);
    return RestaurantProfileComponent;
}());
exports.RestaurantProfileComponent = RestaurantProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdGF1cmFudFByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVzdGF1cmFudFByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELDBDQUFzRTtBQUV0RSxpREFBZ0Q7QUFFaEQscURBQWtEO0FBWWxEO0lBUUksb0NBQTJCLE1BQWMsRUFBVSxJQUFVO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLG1EQUFjLEdBQXJCO1FBRUUsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFFTSw4Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7UUFDOUUsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULGdCQUFnQixFQUFFLGtCQUFrQjthQUN2QztTQUNKLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVEsOENBQVMsR0FBaEI7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sZ0RBQVcsR0FBbEI7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBOUNRLDBCQUEwQjtRQVR0QyxnQkFBUyxDQUFFO1lBQ1osUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7U0FDYixDQUFDO3lDQVlxQyxlQUFNLEVBQWdCLFdBQUk7T0FScEQsMEJBQTBCLENBK0N0QztJQUFELGlDQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJyA7IFxyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkVuZCxOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQge1Jlc3RhdXJhbnR9IGZyb20gXCIuLi8uLi9zaGFyZWQvcmVzdGF1cmFudC9yZXN0YXVyYW50XCI7XHJcbmltcG9ydCB7UGVyc29ufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BlcnNvbi9wZXJzb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbnNlbGVjdG9yOiBcIlJlc3RhdXJhbnRQcm9maWxlQ29tcG9uZW50XCIsXHJcbm1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbnRlbXBsYXRlVXJsOiBcIi4vUmVzdGF1cmFudFByb2ZpbGUuaHRtbFwiLFxyXG5zdHlsZVVybHM6W1wiXCJdLFxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdGF1cmFudFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG5cclxuXHJcbiAgcmVzdGF1cmFudERpc3BsYXk6IHN0cmluZ1tdO1xyXG4gIHBlcnNvbjogUGVyc29uO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKXtcclxuICAgICAgdGhpcy5yZXN0YXVyYW50RGlzcGxheSA9IFtdO1xyXG4gICAgICB0aGlzLnBlcnNvbiA9IG5ldyBQZXJzb24oXCJsb2dhblwiLCAnc3dhcnR6Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmxvYWRSZXN0YXVyYW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRSZXN0YXVyYW50KClcclxuICAgIHtcclxuICAgICAgbGV0IHRlc3RSZXN0YXVyYW50TGlzdCA9IFsnVGFjbyBCZWxsJywgJ01jRG9uYWxkJywgJ1N1YndheSddO1xyXG4gICAgICB0aGlzLnBlcnNvbi5hZGRSZXN0YXVyYW50KHRlc3RSZXN0YXVyYW50TGlzdCk7XHJcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wZXJzb24uZ2V0UmVzdGF1cmFudCgpKXtcclxuICAgICAgICAgIHRoaXMucmVzdGF1cmFudERpc3BsYXlbaV0gPSB0aGlzLnBlcnNvbi5nZXRSZXN0YXVyYW50KClbaV0ucmVzdGF1cmFudE5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3Mpe1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFJlc3RhdXJhbnQgPSB0aGlzLnJlc3RhdXJhbnREaXNwbGF5W2FyZ3MuaW5kZXhdO1xyXG4gICAgICBjb25zb2xlLmxvZygndGhlIGZvbGxvd2luZyByZXN0YXVyYW50IHdhcyBzZWxlY3RlZDogICAke3NlbGVjdGVkUmVzdGF1cmFudH0nKTtcclxuICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgIFwicmVzdGF1cmFudE5hbWVcIjogc2VsZWN0ZWRSZXN0YXVyYW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydSZXN0YXVyYW50SW5mbyddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcblxyXG4gICAgcHVibGljIG9uVGFwQmFjaygpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlRlbXBOYXZpZ2F0aW9uXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXBTZWFyY2goKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJTZWFyY2hSZXN0YXVyYW50XCJdKTtcclxuICAgIH1cclxufSJdfQ==