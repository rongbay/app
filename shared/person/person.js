"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personalPref_1 = require("../personalPref/personalPref");
var group_1 = require("../group/group");
var restaurant_1 = require("../restaurant/restaurant");
var Person = /** @class */ (function () {
    function Person(first, last) {
        this.first = first;
        this.last = last;
        this.firstName = first;
        this.lastName = last;
        this.prefs = [];
        this.groups = [];
        this.restaurants = [];
    }
    Person.prototype.setFirstName = function (name) {
        this.firstName = name;
    };
    Person.prototype.setLastName = function (lname) {
        this.lastName = lname;
    };
    Person.prototype.addPreference = function (list) {
        for (var i in list) {
            var newPref = new personalPref_1.personalPref(list[i]);
            this.prefs.push(newPref);
        }
        //check that preference does not already exist
    };
    Person.prototype.getPreferences = function () {
        return this.prefs;
    };
    Person.prototype.removePref = function (list, name) {
        for (var i = 0; i > list.length; i++) {
            if (list[i].name == name) {
                list.splice(i, 1);
            }
        }
    };
    ///group functions
    Person.prototype.addGroups = function (list) {
        for (var i in list) {
            var newGroup = new group_1.Group(list[i], 79);
            this.groups.push(newGroup);
        }
    };
    Person.prototype.addSingleGroup = function (newlyAdded) {
        var newGroup = new group_1.Group(newlyAdded, 58);
        this.groups.push(newGroup);
    };
    Person.prototype.getGroups = function () {
        return this.groups;
    };
    Person.prototype.changePrefImportance = function (pref, newImportance) {
        pref.howImportant = newImportance;
    };
    ///Restaurant function
    Person.prototype.addRestaurant = function (list) {
        for (var i in list) {
            var newRestaurant = new restaurant_1.Restaurant(list[i], 225);
            this.restaurants.push(newRestaurant);
        }
    };
    Person.prototype.addSingleRestaurant = function (newlyRestaurant) {
        var newRestaurant = new restaurant_1.Restaurant(newlyRestaurant, 500);
        this.restaurants.push(newRestaurant);
    };
    Person.prototype.getRestaurant = function () {
        return this.restaurants;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQXlEO0FBQ3pELHdDQUFxQztBQUNyQyx1REFBc0Q7QUFDdEQ7SUFRRSxnQkFBbUIsS0FBYSxFQUFTLElBQVc7UUFBakMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQU87UUFFbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUU7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUU7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUU7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVBLDZCQUFZLEdBQVosVUFBYSxJQUFZO1FBRXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSw0QkFBVyxHQUFsQixVQUFtQixLQUFhO1FBRTlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFTSw4QkFBYSxHQUFwQixVQUFxQixJQUFjO1FBR2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUNuQixDQUFDO1lBQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFDRCw4Q0FBOEM7SUFDaEQsQ0FBQztJQUVNLCtCQUFjLEdBQXJCO1FBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVNLDJCQUFVLEdBQWpCLFVBQWtCLElBQW1CLEVBQUUsSUFBWTtRQUVsRCxHQUFHLENBQUEsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQ2xDLENBQUM7WUFDTSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUN4QixDQUFDO2dCQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUM7UUFDUixDQUFDO0lBQ0YsQ0FBQztJQUVELGtCQUFrQjtJQUVYLDBCQUFTLEdBQWhCLFVBQWlCLElBQWM7UUFFN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQ25CLENBQUM7WUFDQyxJQUFJLFFBQVEsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFDTSwrQkFBYyxHQUFyQixVQUFzQixVQUFrQjtRQUV0QyxJQUFJLFFBQVEsR0FBRyxJQUFJLGFBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLDBCQUFTLEdBQWhCO1FBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNNLHFDQUFvQixHQUEzQixVQUE0QixJQUFrQixFQUFFLGFBQXFCO1FBRW5FLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQkFBc0I7SUFFZiw4QkFBYSxHQUFwQixVQUFxQixJQUFjO1FBRWpDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUNsQixDQUFDO1lBQ0MsSUFBSSxhQUFhLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVNLG9DQUFtQixHQUExQixVQUEyQixlQUF1QjtRQUVoRCxJQUFJLGFBQWEsR0FBRyxJQUFJLHVCQUFVLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSw4QkFBYSxHQUFwQjtRQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXBHRCxJQW9HQztBQXBHWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGVyc29uYWxQcmVmfSBmcm9tICcuLi9wZXJzb25hbFByZWYvcGVyc29uYWxQcmVmJ1xyXG5pbXBvcnQge0dyb3VwfSBmcm9tICcuLi9ncm91cC9ncm91cCc7XHJcbmltcG9ydCB7IFJlc3RhdXJhbnQgfSBmcm9tICcuLi9yZXN0YXVyYW50L3Jlc3RhdXJhbnQnO1xyXG5leHBvcnQgY2xhc3MgUGVyc29uXHJcbntcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTtcclxuICBwcmVmczogcGVyc29uYWxQcmVmW10gOyBcclxuICBncm91cHM6IEdyb3VwW107XHJcbiAgcmVzdGF1cmFudHM6IFJlc3RhdXJhbnRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGZpcnN0OiBzdHJpbmcsIHB1YmxpYyBsYXN0OnN0cmluZylcclxuICB7XHJcbiAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3QgO1xyXG4gICB0aGlzLmxhc3ROYW1lID0gbGFzdCA7IFxyXG4gICB0aGlzLnByZWZzID0gW10gO1xyXG4gICB0aGlzLmdyb3VwcyA9IFtdOyBcclxuICAgdGhpcy5yZXN0YXVyYW50cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgIHNldEZpcnN0TmFtZShuYW1lOiBzdHJpbmcpXHJcbiAge1xyXG4gICAgdGhpcy5maXJzdE5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldExhc3ROYW1lKGxuYW1lOiBzdHJpbmcpXHJcbiAge1xyXG4gICAgdGhpcy5sYXN0TmFtZSA9IGxuYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFByZWZlcmVuY2UobGlzdDogc3RyaW5nW10pXHJcbiAge1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpIGluIGxpc3QpXHJcbiAgICB7XHJcbiAgICAgIGxldCBuZXdQcmVmID0gbmV3IHBlcnNvbmFsUHJlZihsaXN0W2ldKTtcclxuICAgICAgdGhpcy5wcmVmcy5wdXNoKG5ld1ByZWYpOyBcclxuICAgIH1cclxuICAgIC8vY2hlY2sgdGhhdCBwcmVmZXJlbmNlIGRvZXMgbm90IGFscmVhZHkgZXhpc3RcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQcmVmZXJlbmNlcygpXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMucHJlZnM7IFxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVByZWYobGlzdDpwZXJzb25hbFByZWZbXSwgbmFtZTogc3RyaW5nKVxyXG4gIHtcclxuICAgZm9yKCBsZXQgaSA9IDA7aSA+IGxpc3QubGVuZ3RoO2krKylcclxuICAge1xyXG4gICAgICAgICAgaWYobGlzdFtpXS5uYW1lID09IG5hbWUpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksMSk7IFxyXG4gICAgICAgICAgfVxyXG4gICB9XHJcbiAgfVxyXG5cclxuICAvLy9ncm91cCBmdW5jdGlvbnNcclxuXHJcbiAgcHVibGljIGFkZEdyb3VwcyhsaXN0OiBzdHJpbmdbXSlcclxuICB7XHJcbiAgICBmb3IgKGxldCBpIGluIGxpc3QpXHJcbiAgICB7XHJcbiAgICAgIGxldCBuZXdHcm91cCA9IG5ldyBHcm91cChsaXN0W2ldLDc5KTtcclxuICAgICAgdGhpcy5ncm91cHMucHVzaChuZXdHcm91cCk7IFxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgYWRkU2luZ2xlR3JvdXAobmV3bHlBZGRlZDogc3RyaW5nKVxyXG4gIHtcclxuICAgIGxldCBuZXdHcm91cCA9IG5ldyBHcm91cChuZXdseUFkZGVkLCA1OClcclxuICAgIHRoaXMuZ3JvdXBzLnB1c2gobmV3R3JvdXApOyBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRHcm91cHMoKVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmdyb3VwcztcclxuICB9XHJcbiAgcHVibGljIGNoYW5nZVByZWZJbXBvcnRhbmNlKHByZWY6IHBlcnNvbmFsUHJlZiwgbmV3SW1wb3J0YW5jZTogbnVtYmVyKVxyXG4gIHtcclxuICAgIHByZWYuaG93SW1wb3J0YW50ID0gbmV3SW1wb3J0YW5jZTsgXHJcbiAgfVxyXG5cclxuICAvLy9SZXN0YXVyYW50IGZ1bmN0aW9uXHJcblxyXG4gIHB1YmxpYyBhZGRSZXN0YXVyYW50KGxpc3Q6IHN0cmluZ1tdKVxyXG4gIHtcclxuICAgIGZvcihsZXQgaSBpbiBsaXN0KVxyXG4gICAge1xyXG4gICAgICBsZXQgbmV3UmVzdGF1cmFudCA9IG5ldyBSZXN0YXVyYW50KGxpc3RbaV0sIDIyNSk7XHJcbiAgICAgIHRoaXMucmVzdGF1cmFudHMucHVzaChuZXdSZXN0YXVyYW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRTaW5nbGVSZXN0YXVyYW50KG5ld2x5UmVzdGF1cmFudDogc3RyaW5nKVxyXG4gIHtcclxuICAgIGxldCBuZXdSZXN0YXVyYW50ID0gbmV3IFJlc3RhdXJhbnQobmV3bHlSZXN0YXVyYW50LCA1MDApXHJcbiAgICB0aGlzLnJlc3RhdXJhbnRzLnB1c2gobmV3UmVzdGF1cmFudCk7IFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlc3RhdXJhbnQoKVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLnJlc3RhdXJhbnRzO1xyXG4gIH1cclxufSJdfQ==