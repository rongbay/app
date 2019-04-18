"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.onTapSignIn = function () {
        if (this.emailAddress != null && this.password != null) {
            alert("Welcome Back");
            var navigationExtras = {
                queryParams: {
                    "firstName": "Nic",
                    "lastName": "Logan"
                }
            };
            this.router.navigate(["Home"], navigationExtras);
        }
    };
    LoginComponent.prototype.onTapUser = function () {
        this.router.navigate(["Home"]);
    };
    LoginComponent.prototype.onTapBack = function () {
        this.router.navigate(["TempNavigation"]);
    };
    LoginComponent.prototype.onTapRegister = function () {
        this.router.navigate(["Register"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "LoginComponent",
            moduleId: module.id,
            templateUrl: "./login.html",
            styleUrls: ['./login-common.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5RDtBQWF6RDtJQUdJLHdCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUV6QyxDQUFDO0lBRU0sb0NBQVcsR0FBbEI7UUFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFHLElBQUksQ0FBQyxDQUN0RCxDQUFDO1lBQ0MsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksZ0JBQWdCLEdBQXFCO2dCQUN2QyxXQUFXLEVBQUU7b0JBQ2IsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLFVBQVUsRUFBRSxPQUFPO2lCQUNwQjthQUNGLENBQUE7WUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDbkQsQ0FBQztJQUVMLENBQUM7SUFFTSxrQ0FBUyxHQUFoQjtRQUVFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ00sa0NBQVMsR0FBaEI7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQW5DUSxjQUFjO1FBUjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUMsY0FBYztZQUMxQixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO3lDQU1xQyxlQUFNO09BSGhDLGNBQWMsQ0FvQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7T0RhdGFDb25maWd1cmF0aW9uLCBPRGF0YVNlcnZpY2VGYWN0b3J5LCBPRGF0YVNlcnZpY2V9ICBmcm9tIFwiYW5ndWxhci1vZGF0YS1lczVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TdHlsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkxvZ2luQ29tcG9uZW50XCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDpcIi4vbG9naW4uaHRtbFwiLCBcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi1jb21tb24uY3NzJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIGVtYWlsQWRkcmVzcyA7XHJcbiAgcGFzc3dvcmQgOyBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGFwU2lnbkluKCl7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVtYWlsQWRkcmVzcyAhPSBudWxsICYmIHRoaXMucGFzc3dvcmQgIT1udWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFsZXJ0KGBXZWxjb21lIEJhY2tgKTtcclxuICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBcImZpcnN0TmFtZVwiOiBcIk5pY1wiLFxyXG4gICAgICAgICAgICBcImxhc3ROYW1lXCI6IFwiTG9nYW5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIkhvbWVcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UYXBVc2VyKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiSG9tZVwiXSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25UYXBCYWNrKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiVGVtcE5hdmlnYXRpb25cIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRhcFJlZ2lzdGVyKClcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiUmVnaXN0ZXJcIl0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=