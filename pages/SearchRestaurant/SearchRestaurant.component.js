"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var DataItem = /** @class */ (function () {
    function DataItem(name, id) {
        this.name = name;
        this.id = id;
    }
    return DataItem;
}());
var SearchRestaurantComponent = /** @class */ (function () {
    function SearchRestaurantComponent(router, page) {
        this.router = router;
        this.page = page;
        //this.arrayItems.push(new DataItem("United States", "220"));
        // this.arrayItems.push(new DataItem("Bulgaria", "221"));
        // this.arrayItems.push(new DataItem("Germany", "222"));
        // this.arrayItems.push(new DataItem("Denmark", "223"));
        // this.arrayItems.push(new DataItem("India", "224"));
        // this.arrayItems.push(new DataItem("Spain", "225"));
        // this.arrayItems.push(new DataItem("Italy", "226"));
        this.myItems = [];
        this.arrayItems = [];
        //this.myItems = new ObservableArray<DataItem>(this.arrayItems);
    }
    SearchRestaurantComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        var searchValue = searchBar.text.toLowerCase();
        this.arrayItems = [' 220', '221', '222'];
        // this.myItems = new ObservableArray<DataItem>();
        if (searchValue !== "") {
            for (var i = 0; i < this.arrayItems.length; i++) {
                if (this.arrayItems[i] == searchValue) {
                    this.myItems.push(this.arrayItems[i]);
                }
            }
        }
    };
    SearchRestaurantComponent.prototype.onClear = function (args) {
        var _this = this;
        var searchBar = args.object;
        searchBar.text = "";
        searchBar.hint = "Search for a country and press enter";
        //this.myItems = new ObservableArray<DataItem>();
        this.arrayItems.forEach(function (item) {
            _this.myItems.push(item);
        });
    };
    SearchRestaurantComponent.prototype.onTapBack = function () {
        this.router.navigate(["RestaurantProfile"]);
    };
    SearchRestaurantComponent = __decorate([
        core_1.Component({
            selector: "SearchRestaurantComponent",
            moduleId: module.id,
            templateUrl: "./SearchRestaurant.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], SearchRestaurantComponent);
    return SearchRestaurantComponent;
}());
exports.SearchRestaurantComponent = SearchRestaurantComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUmVzdGF1cmFudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZWFyY2hSZXN0YXVyYW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSwwQ0FBc0U7QUFFdEUsaURBQWdEO0FBT2hEO0lBQ0ksa0JBQW1CLElBQVksRUFBUyxFQUFVO1FBQS9CLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFRO0lBQUksQ0FBQztJQUMzRCxlQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFRRDtJQU1JLG1DQUEyQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUN6RCw2REFBNkQ7UUFDOUQseURBQXlEO1FBQ3pELHdEQUF3RDtRQUN4RCx3REFBd0Q7UUFDeEQsc0RBQXNEO1FBQ3RELHNEQUFzRDtRQUN0RCxzREFBc0Q7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsZ0VBQWdFO0lBQ3BFLENBQUM7SUFFTSw0Q0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLGtEQUFrRDtRQUNqRCxFQUFFLENBQUMsQ0FBQyxXQUFXLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFFcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRU0sMkNBQU8sR0FBZCxVQUFlLElBQUk7UUFBbkIsaUJBU0M7UUFSRyxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsc0NBQXNDLENBQUM7UUFFeEQsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2Q0FBUyxHQUFoQjtRQUVFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFoRFEseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7eUNBT3FDLGVBQU0sRUFBZ0IsV0FBSTtPQU5wRCx5QkFBeUIsQ0FrRHJDO0lBQUQsZ0NBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkVuZCxOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XHJcbmltcG9ydCB7UmVzdGF1cmFudH0gIGZyb20gJy4uLy4uL3NoYXJlZC9yZXN0YXVyYW50L3Jlc3RhdXJhbnQnO1xyXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tICcuLi8uLi9zaGFyZWQvcGVyc29uL3BlcnNvbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5cclxuXHJcbmNsYXNzIERhdGFJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBpZDogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTZWFyY2hSZXN0YXVyYW50Q29tcG9uZW50XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9TZWFyY2hSZXN0YXVyYW50Lmh0bWxcIixcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN0YXVyYW50Q29tcG9uZW50IHtcclxuICAgIC8vcHJpdmF0ZSBhcnJheUl0ZW1zOiBBcnJheTxEYXRhSXRlbT4gPSBbXTtcclxuICAgIC8vcHVibGljIG15SXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xyXG4gICAgbXlJdGVtczogc3RyaW5nW107XHJcbiAgICBhcnJheUl0ZW1zOiBzdHJpbmdbXTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgLy90aGlzLmFycmF5SXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oXCJVbml0ZWQgU3RhdGVzXCIsIFwiMjIwXCIpKTtcclxuICAgICAgIC8vIHRoaXMuYXJyYXlJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShcIkJ1bGdhcmlhXCIsIFwiMjIxXCIpKTtcclxuICAgICAgIC8vIHRoaXMuYXJyYXlJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShcIkdlcm1hbnlcIiwgXCIyMjJcIikpO1xyXG4gICAgICAgLy8gdGhpcy5hcnJheUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKFwiRGVubWFya1wiLCBcIjIyM1wiKSk7XHJcbiAgICAgICAvLyB0aGlzLmFycmF5SXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oXCJJbmRpYVwiLCBcIjIyNFwiKSk7XHJcbiAgICAgICAvLyB0aGlzLmFycmF5SXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oXCJTcGFpblwiLCBcIjIyNVwiKSk7XHJcbiAgICAgICAvLyB0aGlzLmFycmF5SXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oXCJJdGFseVwiLCBcIjIyNlwiKSk7XHJcbiAgICAgICAgdGhpcy5teUl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5hcnJheUl0ZW1zID0gW107XHJcbiAgICAgICAgLy90aGlzLm15SXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPih0aGlzLmFycmF5SXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgbGV0IHNlYXJjaFZhbHVlID0gc2VhcmNoQmFyLnRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB0aGlzLmFycmF5SXRlbXMgPSBbJyAyMjAnLCAnMjIxJywnMjIyJ107XHJcbiAgICAgICAvLyB0aGlzLm15SXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xyXG4gICAgICAgIGlmIChzZWFyY2hWYWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlJdGVtc1tpXSA9PSBzZWFyY2hWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlJdGVtcy5wdXNoKHRoaXMuYXJyYXlJdGVtc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xlYXIoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHNlYXJjaEJhci50ZXh0ID0gXCJcIjtcclxuICAgICAgICBzZWFyY2hCYXIuaGludCA9IFwiU2VhcmNoIGZvciBhIGNvdW50cnkgYW5kIHByZXNzIGVudGVyXCI7XHJcblxyXG4gICAgICAgIC8vdGhpcy5teUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4oKTtcclxuICAgICAgICB0aGlzLmFycmF5SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5teUl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGFwQmFjaygpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlJlc3RhdXJhbnRQcm9maWxlXCJdKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19