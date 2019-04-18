"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var data_1 = require("../app/shared/providers/data/data");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
//import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
//import { NativeScriptUISideDrawerModule } from "nativescript-sidedrawer" ; 
//import { RadioButtonModule } from 'nativescript-radiobutton/angular';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule,
                //NativeScriptUISideDrawerModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
            ],
            declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents),
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [data_1.Data]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFtRTtBQUNuRSxzREFBb0U7QUFDcEUsMERBQXVEO0FBQ3ZELGlEQUErQztBQUMvQyw2Q0FBNkQ7QUFDN0QsNkdBQTZHO0FBQzdHLDZFQUE2RTtBQUM3RSx1RUFBdUU7QUFrQnZFO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFmckIsZUFBUSxDQUFDO1lBRVIsT0FBTyxFQUFFLENBQUMsd0NBQWtCO2dCQUMxQixpQ0FBaUM7Z0JBQ2pDLCtCQUF1QjtnQkFDdkIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQzthQUV4QztZQUVGLFlBQVksR0FBRyw0QkFBWSxTQUFJLG1DQUFxQixDQUFDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsV0FBSSxDQUFDO1NBQ2xCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuaW1wb3J0e05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnR7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gJy4uL2FwcC9zaGFyZWQvcHJvdmlkZXJzL2RhdGEvZGF0YSc7IFxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzfSBmcm9tICcuL2FwcC5yb3V0aW5nJzsgXHJcbi8vaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhci9zaWRlLWRyYXdlci1kaXJlY3RpdmVzJztcclxuLy9pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXJcIiA7IFxyXG4vL2ltcG9ydCB7IFJhZGlvQnV0dG9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXJhZGlvYnV0dG9uL2FuZ3VsYXInO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgXHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIC8vTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gICAgXHJcbiAgIF0sXHJcbiAgICBcclxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsLi4ubmF2aWdhdGFibGVDb21wb25lbnRzXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxuICBwcm92aWRlcnM6IFtEYXRhXSBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXX0=