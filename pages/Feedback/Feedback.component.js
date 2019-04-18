"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(router) {
        this.router = router;
    }
    FeedbackComponent.prototype.onTapBack = function () {
        this.router.navigate(['UserProfile']);
    };
    FeedbackComponent = __decorate([
        core_1.Component({
            selector: "Feedback",
            moduleId: module.id,
            templateUrl: "./Feedback.html",
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFzRDtBQVN0RDtJQUNJLDJCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUV6QyxDQUFDO0lBQ00scUNBQVMsR0FBaEI7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQVBRLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFFO1lBQ1osUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsU0FBUyxFQUFDLEVBQUU7U0FDWCxDQUFDO3lDQUdxQyxlQUFNO09BRGhDLGlCQUFpQixDQVE3QjtJQUFELHdCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnIDsgXHJcbmltcG9ydCB7Um91dGVyLEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbnNlbGVjdG9yOiBcIkZlZWRiYWNrXCIsXHJcbm1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbnRlbXBsYXRlVXJsOiBcIi4vRmVlZGJhY2suaHRtbFwiLFxyXG5zdHlsZVVybHM6W10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tDb21wb25lbnR7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uVGFwQmFjaygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydVc2VyUHJvZmlsZSddKTsgXHJcbiAgICB9XHJcbn0iXX0=