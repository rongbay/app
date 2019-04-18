"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TempNavigationComponent = /** @class */ (function () {
    function TempNavigationComponent(router) {
        this.router = router;
    }
    TempNavigationComponent.prototype.onTap = function () {
        this.router.navigate(["login"]);
    };
    TempNavigationComponent.prototype.onTapUser = function () {
        this.router.navigate(["UserProfile"]);
    };
    TempNavigationComponent.prototype.onTapGroup = function () {
        this.router.navigate(["GroupProfile"]);
    };
    TempNavigationComponent.prototype.onTapAdmin = function () {
        this.router.navigate(["AdminView"]);
    };
    TempNavigationComponent.prototype.onTapRestaurant = function () {
        this.router.navigate(["RestaurantProfile"]);
    };
    TempNavigationComponent.prototype.onTapRegister = function () {
        this.router.navigate(["Register"]);
    };
    TempNavigationComponent.prototype.onTapTest = function () {
        this.router.navigate(['list']);
    };
    TempNavigationComponent = __decorate([
        core_1.Component({
            selector: "TempNavigationComponent",
            moduleId: module.id,
            templateUrl: "./TempNavigation.html",
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TempNavigationComponent);
    return TempNavigationComponent;
}());
exports.TempNavigationComponent = TempNavigationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcE5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGVtcE5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFzQztBQVN0QztJQUNBLGlDQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUV6QyxDQUFDO0lBRU0sdUNBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sMkNBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLDRDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSw0Q0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ00saURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sK0NBQWEsR0FBcEI7UUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNNLDJDQUFTLEdBQWhCO1FBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUE5QlksdUJBQXVCO1FBUG5DLGdCQUFTLENBQUU7WUFDWixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBRW5DLENBQUM7eUNBR2lDLGVBQU07T0FENUIsdUJBQXVCLENBZ0NuQztJQUFELDhCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnIDsgXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcclxuXHJcbkBDb21wb25lbnQgKHtcclxuc2VsZWN0b3I6IFwiVGVtcE5hdmlnYXRpb25Db21wb25lbnRcIixcclxubW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxudGVtcGxhdGVVcmw6IFwiLi9UZW1wTmF2aWdhdGlvbi5odG1sXCIsXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBOYXZpZ2F0aW9uQ29tcG9uZW50e1xyXG5wdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcblxyXG59XHJcblxyXG5wdWJsaWMgb25UYXAoKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImxvZ2luXCJdKTtcclxufVxyXG5cclxucHVibGljIG9uVGFwVXNlcigpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiVXNlclByb2ZpbGVcIl0pO1xyXG59XHJcblxyXG5wdWJsaWMgb25UYXBHcm91cCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiR3JvdXBQcm9maWxlXCJdKTtcclxufVxyXG5cclxucHVibGljIG9uVGFwQWRtaW4oKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIkFkbWluVmlld1wiXSk7XHJcbn1cclxucHVibGljIG9uVGFwUmVzdGF1cmFudCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiUmVzdGF1cmFudFByb2ZpbGVcIl0pO1xyXG59XHJcblxyXG5wdWJsaWMgb25UYXBSZWdpc3Rlcigpe1xyXG50aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJSZWdpc3RlclwiXSlcclxufVxyXG5wdWJsaWMgb25UYXBUZXN0KClcclxue1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsaXN0J10pXHJcbn1cclxuXHJcbn0iXX0=