"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var person_1 = require("~/shared/person/person");
var dialogs = require("tns-core-modules/ui/dialogs");
var ManagePreferencesComponent = /** @class */ (function () {
    function ManagePreferencesComponent(router, page) {
        this.router = router;
        this.page = page;
        this.preferencesDisplay = [];
        this.person = new person_1.Person('Test', 'User');
    }
    ManagePreferencesComponent.prototype.ngOnInit = function () {
        this.loadPersonalPref();
    };
    ManagePreferencesComponent.prototype.onTapBack = function () {
        this.router.navigate(['UserProfile']);
    };
    ManagePreferencesComponent.prototype.loadPersonalPref = function () {
        var prefs = ['Seafood', 'Italian', 'Mexican'];
        this.person.addPreference(prefs);
        for (var i in this.person.getPreferences()) {
            this.preferencesDisplay[i] = this.person.getPreferences()[i].name;
        }
    };
    ManagePreferencesComponent.prototype.addPref = function () {
        var _this = this;
        dialogs.prompt({
            title: "Add a Preference",
            message: "Enter the Preference",
            okButtonText: "Add",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral text",
            // defaultText: "Default text",
            inputType: dialogs.inputType.text
        }).then(function (r) {
            if (r.text != " ") {
                console.log("Dialog result: " + r.result + ", text: " + r.text);
                //this.newGroup.addMembers(r.text) ; 
                var temp = [r.text];
                _this.person.addPreference(temp);
                for (var i in _this.person.getPreferences()) {
                    _this.preferencesDisplay[i] = _this.person.getPreferences()[i].name;
                }
            }
            else {
                alert("Members Name is required");
            }
        });
    };
    ManagePreferencesComponent.prototype.onTapAdd = function () {
        this.addPref();
    };
    ManagePreferencesComponent.prototype.onTapTest = function () {
        this.testImportance(this.person);
    };
    ManagePreferencesComponent.prototype.testImportance = function (per) {
        var sorted;
        for (var i = 0; i < per.getPreferences().length; i++) {
            var c = Math.floor(Math.random() * 10);
            per.changePrefImportance(per.getPreferences()[i], c);
            //  console.log(per.getPreferences()[i].name + " " + per.getPreferences()[i].howImportant);
        }
        sorted = per.getPreferences();
        /*sorted.sort((n1, n2) => {
        if (n1.howImportant > n2.howImportant) {
            return 1;
        }
        return 0;
    });*/
        console.log("Unsorted");
        console.log(per.getPreferences());
        console.log("Sorted");
        console.log(sorted);
    };
    ManagePreferencesComponent = __decorate([
        core_1.Component({
            selector: "ManagePreferencesComponent",
            moduleId: module.id,
            templateUrl: "./ManagePreferences.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], ManagePreferencesComponent);
    return ManagePreferencesComponent;
}());
exports.ManagePreferencesComponent = ManagePreferencesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlUHJlZmVyZW5jZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWFuYWdlUHJlZmVyZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF3RDtBQUV4RCxpREFBZ0Q7QUFFaEQsaURBQWdEO0FBQ2hELHFEQUF1RDtBQVl2RDtJQVNJLG9DQUEyQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUV6RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTdDLENBQUM7SUFURCw2Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQVNNLDhDQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxxREFBZ0IsR0FBdkI7UUFDSSxJQUFJLEtBQUssR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLENBQUM7SUFDTCxDQUFDO0lBRU0sNENBQU8sR0FBZDtR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bmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb3VwL2dyb3VwXCI7XHJcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gJ34vc2hhcmVkL3BlcnNvbi9wZXJzb24nO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgcGVyc29uYWxQcmVmIH0gZnJvbSAnfi9zaGFyZWQvcGVyc29uYWxQcmVmL3BlcnNvbmFsUHJlZic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk1hbmFnZVByZWZlcmVuY2VzQ29tcG9uZW50XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9NYW5hZ2VQcmVmZXJlbmNlcy5odG1sXCIsXHJcbiAgICAvL3N0eWxlVXJsczpbXCJcIl0sXHJcbiAgICAvKnRlbXBsYXRlOiBgXHJcbiAgICBgKi9cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VQcmVmZXJlbmNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBncm91cHM6IEdyb3VwW107XHJcbiAgICBwZXJzb246IFBlcnNvbjtcclxuICAgIHByZWZlcmVuY2VzRGlzcGxheTogc3RyaW5nW107XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkUGVyc29uYWxQcmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG5cclxuICAgICAgICB0aGlzLnByZWZlcmVuY2VzRGlzcGxheSA9IFtdO1xyXG4gICAgICAgIHRoaXMucGVyc29uID0gbmV3IFBlcnNvbignVGVzdCcsICdVc2VyJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRhcEJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydVc2VyUHJvZmlsZSddKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFBlcnNvbmFsUHJlZigpIHtcclxuICAgICAgICBsZXQgcHJlZnMgPSBbJ1NlYWZvb2QnLCAnSXRhbGlhbicsICdNZXhpY2FuJ107XHJcbiAgICAgICAgdGhpcy5wZXJzb24uYWRkUHJlZmVyZW5jZShwcmVmcyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wZXJzb24uZ2V0UHJlZmVyZW5jZXMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnByZWZlcmVuY2VzRGlzcGxheVtpXSA9IHRoaXMucGVyc29uLmdldFByZWZlcmVuY2VzKClbaV0ubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFByZWYoKSB7XHJcblxyXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQWRkIGEgUHJlZmVyZW5jZVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBQcmVmZXJlbmNlXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBZGRcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgLy8gbmV1dHJhbEJ1dHRvblRleHQ6IFwiTmV1dHJhbCB0ZXh0XCIsXHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRUZXh0OiBcIkRlZmF1bHQgdGV4dFwiLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHIudGV4dCAhPSBcIiBcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5uZXdHcm91cC5hZGRNZW1iZXJzKHIudGV4dCkgOyBcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gW3IudGV4dF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbi5hZGRQcmVmZXJlbmNlKHRlbXApO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnBlcnNvbi5nZXRQcmVmZXJlbmNlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmZXJlbmNlc0Rpc3BsYXlbaV0gPSB0aGlzLnBlcnNvbi5nZXRQcmVmZXJlbmNlcygpW2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNZW1iZXJzIE5hbWUgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG9uVGFwQWRkKCkge1xyXG4gICAgICAgIHRoaXMuYWRkUHJlZigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uVGFwVGVzdCgpIHtcclxuICAgICAgICB0aGlzLnRlc3RJbXBvcnRhbmNlKHRoaXMucGVyc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGVzdEltcG9ydGFuY2UocGVyOiBQZXJzb24pIHtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNvcnRlZDogcGVyc29uYWxQcmVmW107XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlci5nZXRQcmVmZXJlbmNlcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICBwZXIuY2hhbmdlUHJlZkltcG9ydGFuY2UocGVyLmdldFByZWZlcmVuY2VzKClbaV0sIGMpO1xyXG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHBlci5nZXRQcmVmZXJlbmNlcygpW2ldLm5hbWUgKyBcIiBcIiArIHBlci5nZXRQcmVmZXJlbmNlcygpW2ldLmhvd0ltcG9ydGFudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvcnRlZCA9IHBlci5nZXRQcmVmZXJlbmNlcygpO1xyXG5cclxuICAgICAgICAgICAgLypzb3J0ZWQuc29ydCgobjEsIG4yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuMS5ob3dJbXBvcnRhbnQgPiBuMi5ob3dJbXBvcnRhbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVbnNvcnRlZFwiKSA7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBlci5nZXRQcmVmZXJlbmNlcygpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3J0ZWRcIik7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNvcnRlZCk7IFxyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=