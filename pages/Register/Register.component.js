"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { a } from '@angular/core/src/render3';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
    }
    RegisterComponent.prototype.onTapBack = function () {
        this.router.navigate(["TempNavigation"]);
    };
    RegisterComponent.prototype.onTapReg = function () {
        console.log("tapped");
        ///test for blank fields
        if (this.firstName == null || this.lastName == null || this.email == null || this.country == null || this.city == null || this.state == null) {
            alert("All fields required!");
        }
        else 
        ///test if passwords match 
        if (this.password == this.confirmPassword) {
            alert("Welcome:  " + (this.firstName + " " + this.lastName));
            this.router.navigate(['UserProfile']);
        }
        else {
            alert("Passwords do not match!");
            this.password = "";
            this.confirmPassword = "";
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "RegisterComponent",
            moduleId: module.id,
            templateUrl: "./Register.component.html",
            styleUrls: ['./register-common.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLDBDQUF1QztBQVN2QyxnREFBZ0Q7QUFVaEQ7SUFXSSwyQkFBMkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFekMsQ0FBQztJQUVNLHFDQUFTLEdBQWhCO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLHdCQUF3QjtRQUN4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSyxJQUFJLENBQUMsS0FBSyxJQUFHLElBQUksQ0FBQyxDQUN6SSxDQUFDO1lBQ0EsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNGLElBQUk7UUFDSiwyQkFBMkI7UUFDekIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQ3pDLENBQUM7WUFDQyxLQUFLLENBQUMsZ0JBQWEsSUFBSSxDQUFDLFNBQVMsR0FBRSxHQUFHLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFQSxJQUFJLENBQ0QsQ0FBQztZQUNKLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDUCxDQUFDO0lBMUNNLGlCQUFpQjtRQVI3QixnQkFBUyxDQUFFO1lBQ1osUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUVuQyxDQUFDO3lDQWFxQyxlQUFNO09BWGhDLGlCQUFpQixDQTJDM0I7SUFBRCx3QkFBQztDQUFBLEFBM0NILElBMkNHO0FBM0NVLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZScgOyBcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW5qZWN0IH0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0V2ZW50RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIgO1xyXG5pbXBvcnQge1BhZ2UsIGdldFZpZXdCeUlkfSBmcm9tICd1aS9wYWdlJyA7ICBcclxuaW1wb3J0IHtMYWJlbH0gZnJvbSAndWkvbGFiZWwnO1xyXG5pbXBvcnQge1RleHRGaWVsZH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICd1aS9idXR0b24nO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBmcm9tT2JqZWN0LCBmcm9tT2JqZWN0UmVjdXJzaXZlLCBPYnNlcnZhYmxlLCBQcm9wZXJ0eUNoYW5nZURhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuLy9pbXBvcnQgeyBhIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvcmVuZGVyMyc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbnNlbGVjdG9yOiBcIlJlZ2lzdGVyQ29tcG9uZW50XCIsXHJcbm1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbnRlbXBsYXRlVXJsOiBcIi4vUmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcclxuc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXItY29tbW9uLmNzcyddXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IHtcclxuICBmaXJzdE5hbWU7IFxyXG4gIGxhc3ROYW1lO1xyXG4gIGVtYWlsIDsgXHJcbiAgY2l0eTtcclxuICBjb3VudHJ5O1xyXG4gIHN0YXRlO1xyXG4gIHBhc3N3b3JkO1xyXG4gIGNvbmZpcm1QYXNzd29yZDtcclxuICByZXF1aXJlZEZpZWxkczsgXHJcbiAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIG9uVGFwQmFjaygpIFxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJUZW1wTmF2aWdhdGlvblwiXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBvblRhcFJlZygpXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGFwcGVkXCIpO1xyXG4gICAgICAvLy90ZXN0IGZvciBibGFuayBmaWVsZHNcclxuICAgICAgaWYodGhpcy5maXJzdE5hbWUgPT0gbnVsbCB8fCB0aGlzLmxhc3ROYW1lID09IG51bGwgfHx0aGlzLmVtYWlsID09IG51bGwgfHwgdGhpcy5jb3VudHJ5PT0gbnVsbCB8fCB0aGlzLmNpdHkgPT0gbnVsbCAgfHwgdGhpcy5zdGF0ZT09IG51bGwpXHJcbiAgICAgICB7ICBcclxuICAgICAgICBhbGVydChcIkFsbCBmaWVsZHMgcmVxdWlyZWQhXCIpO1xyXG4gICAgICAgfVxyXG4gICAgICBlbHNlIFxyXG4gICAgICAvLy90ZXN0IGlmIHBhc3N3b3JkcyBtYXRjaCBcclxuICAgICAgICBpZih0aGlzLnBhc3N3b3JkID09IHRoaXMuY29uZmlybVBhc3N3b3JkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFsZXJ0KGBXZWxjb21lOiAgJHt0aGlzLmZpcnN0TmFtZSArXCIgXCIrIHRoaXMubGFzdE5hbWV9YCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ1VzZXJQcm9maWxlJ10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgYWxlcnQoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoIVwiKSA7IFxyXG4gICAgICAgICB0aGlzLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICAgdGhpcy5jb25maXJtUGFzc3dvcmQgPSBcIlwiOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=