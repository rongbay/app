"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var restaurant_1 = require("../../shared/restaurant/restaurant");
var RestaurantInfoComponent = /** @class */ (function () {
    function RestaurantInfoComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        // this.groupName = "LogansGroup";
        this.newRestaurant = new restaurant_1.Restaurant(this.restaurantName, 225);
        this.addressDisplay = this.newRestaurant.getAddress();
        this.phoneDisplay = this.newRestaurant.getPhone();
        this.hoursDisplay = this.newRestaurant.getHour();
        this.InfoDisplay = this.newRestaurant.getInfo();
        this.TagDisplay = this.newRestaurant.getTag();
        this.route.queryParams.subscribe(function (params) {
            _this.restaurantName = params["restaurantName"];
            console.log(_this.restaurantName);
        });
    }
    RestaurantInfoComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    RestaurantInfoComponent.prototype.onTapBack = function () {
        this.router.navigate(["RestaurantProfile"]);
    };
    ///for testing 
    RestaurantInfoComponent.prototype.loadData = function () {
        this.newRestaurant.addAddress('2804 Airline Blvd Portsmouth, VA 23701');
        this.newRestaurant.addPhone('(757) 465-0069');
        this.newRestaurant.addHour('Mon 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Tue 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Wed 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Thu 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Fri 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Sat 	7:00 am - 1:00 am');
        this.newRestaurant.addHour('Sun 	7:00 am - 1:00 am');
        this.newRestaurant.addInfo('Gluten-Free');
        this.newRestaurant.addInfo('Take-out');
        this.newRestaurant.addInfo('Good for Kids');
        this.newRestaurant.addInfo('Good for Groups');
        this.newRestaurant.addInfo('Wifi');
        this.newRestaurant.addInfo('Accepts credit cards');
        this.newRestaurant.addInfo('Noise level: Quiet');
        this.newRestaurant.addTag('nothing');
    };
    RestaurantInfoComponent = __decorate([
        core_1.Component({
            selector: "RestaurantInfoComponent",
            moduleId: module.id,
            templateUrl: "./RestaurantInfo.html",
            styleUrls: ["./RestaurantInfo.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], RestaurantInfoComponent);
    return RestaurantInfoComponent;
}());
exports.RestaurantInfoComponent = RestaurantInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdGF1cmFudEluZm9Db21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXN0YXVyYW50SW5mb0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCwwQ0FBcUQ7QUFDckQsaUVBQThEO0FBVzlEO0lBVUksaUNBQTJCLE1BQWMsRUFBVSxLQUFxQjtRQUF4RSxpQkFjQztRQWQwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdkUsa0NBQWtDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx1QkFBVSxDQUFFLElBQUksQ0FBQyxjQUFjLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3ZDLEtBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFHTCxDQUFDO0lBQ0gsMENBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVsQixDQUFDO0lBQ1EsMkNBQVMsR0FBaEI7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBR0QsZUFBZTtJQUNSLDBDQUFRLEdBQWY7UUFFSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6QyxDQUFDO0lBekRRLHVCQUF1QjtRQVBuQyxnQkFBUyxDQUFFO1lBQ1osUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztTQUNqQyxDQUFDO3lDQVlxQyxlQUFNLEVBQWlCLHVCQUFjO09BVi9ELHVCQUF1QixDQTZEbkM7SUFBRCw4QkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnIDsgXHJcbmltcG9ydCB7Um91dGVyLEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcclxuaW1wb3J0IHtSZXN0YXVyYW50fSAgZnJvbSAnLi4vLi4vc2hhcmVkL3Jlc3RhdXJhbnQvcmVzdGF1cmFudCdcclxuaW1wb3J0IHsgZ3JvdXBQcmVmZXJlbmNlIH0gZnJvbSAnfi9zaGFyZWQvZ3JvdXBQcmVmcy9ncm91cFByZWZzJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbnNlbGVjdG9yOiBcIlJlc3RhdXJhbnRJbmZvQ29tcG9uZW50XCIsXHJcbm1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbnRlbXBsYXRlVXJsOiBcIi4vUmVzdGF1cmFudEluZm8uaHRtbFwiLFxyXG5zdHlsZVVybHM6W1wiLi9SZXN0YXVyYW50SW5mby5jc3NcIl0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdGF1cmFudEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgcmVzdGF1cmFudE5hbWU6c3RyaW5nIDtcclxuICBuZXdSZXN0YXVyYW50OiBSZXN0YXVyYW50O1xyXG4gIGFkZHJlc3NEaXNwbGF5IDogc3RyaW5nW107XHJcbiAgcGhvbmVEaXNwbGF5IDogc3RyaW5nW107XHJcbiAgaG91cnNEaXNwbGF5IDogc3RyaW5nW107XHJcbiAgSW5mb0Rpc3BsYXkgOiBzdHJpbmdbXTtcclxuICBUYWdEaXNwbGF5IDogc3RyaW5nW107XHJcblxyXG4gIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKXtcclxuICAgICAvLyB0aGlzLmdyb3VwTmFtZSA9IFwiTG9nYW5zR3JvdXBcIjtcclxuICAgICAgdGhpcy5uZXdSZXN0YXVyYW50ID0gbmV3IFJlc3RhdXJhbnQgKHRoaXMucmVzdGF1cmFudE5hbWUsMjI1KTsgXHJcbiAgICAgIHRoaXMuYWRkcmVzc0Rpc3BsYXkgPSB0aGlzLm5ld1Jlc3RhdXJhbnQuZ2V0QWRkcmVzcygpO1xyXG4gICAgICB0aGlzLnBob25lRGlzcGxheSA9IHRoaXMubmV3UmVzdGF1cmFudC5nZXRQaG9uZSgpO1xyXG4gICAgICB0aGlzLmhvdXJzRGlzcGxheSA9IHRoaXMubmV3UmVzdGF1cmFudC5nZXRIb3VyKCk7XHJcbiAgICAgIHRoaXMuSW5mb0Rpc3BsYXkgPSB0aGlzLm5ld1Jlc3RhdXJhbnQuZ2V0SW5mbygpO1xyXG4gICAgICB0aGlzLlRhZ0Rpc3BsYXkgPSB0aGlzLm5ld1Jlc3RhdXJhbnQuZ2V0VGFnKCk7XHJcbiAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PntcclxuICAgICAgdGhpcy5yZXN0YXVyYW50TmFtZSA9IHBhcmFtc1tcInJlc3RhdXJhbnROYW1lXCJdOyBcclxuICAgICAgY29uc29sZS5sb2codGhpcy5yZXN0YXVyYW50TmFtZSk7IFxyXG4gICAgICB9KTtcclxuICAgICBcclxuXHJcbiAgICB9XHJcbiAgbmdPbkluaXQoKXtcclxuXHJcbiAgICB0aGlzLmxvYWREYXRhKCk7IFxyXG5cclxuICB9XHJcbiAgICBwdWJsaWMgb25UYXBCYWNrKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiUmVzdGF1cmFudFByb2ZpbGVcIl0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy9mb3IgdGVzdGluZyBcclxuICAgIHB1YmxpYyBsb2FkRGF0YSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uZXdSZXN0YXVyYW50LmFkZEFkZHJlc3MoJzI4MDQgQWlybGluZSBCbHZkIFBvcnRzbW91dGgsIFZBIDIzNzAxJyk7XHJcbiAgICAgICAgdGhpcy5uZXdSZXN0YXVyYW50LmFkZFBob25lKCcoNzU3KSA0NjUtMDA2OScpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRIb3VyKCdNb24gXHQ3OjAwIGFtIC0gMTowMCBhbScpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRIb3VyKCdUdWUgXHQ3OjAwIGFtIC0gMTowMCBhbScpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRIb3VyKCdXZWQgXHQ3OjAwIGFtIC0gMTowMCBhbScpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRIb3VyKCdUaHUgXHQ3OjAwIGFtIC0gMTowMCBhbScpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRIb3VyKCdGcmkgXHQ3OjAwIGFtIC0gMTowMCBhbScpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRIb3VyKCdTYXQgXHQ3OjAwIGFtIC0gMTowMCBhbScpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRIb3VyKCdTdW4gXHQ3OjAwIGFtIC0gMTowMCBhbScpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRJbmZvKCdHbHV0ZW4tRnJlZScpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRJbmZvKCdUYWtlLW91dCcpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRJbmZvKCdHb29kIGZvciBLaWRzJyk7XHJcbiAgICAgICAgdGhpcy5uZXdSZXN0YXVyYW50LmFkZEluZm8oJ0dvb2QgZm9yIEdyb3VwcycpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRJbmZvKCdXaWZpJyk7XHJcbiAgICAgICAgdGhpcy5uZXdSZXN0YXVyYW50LmFkZEluZm8oJ0FjY2VwdHMgY3JlZGl0IGNhcmRzJyk7XHJcbiAgICAgICAgdGhpcy5uZXdSZXN0YXVyYW50LmFkZEluZm8oJ05vaXNlIGxldmVsOiBRdWlldCcpO1xyXG4gICAgICAgIHRoaXMubmV3UmVzdGF1cmFudC5hZGRUYWcoJ25vdGhpbmcnKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXX0=