"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Restaurant = /** @class */ (function () {
    function Restaurant(restaurantName, groupID) {
        this.restaurantName = restaurantName;
        this.groupID = groupID;
        this.restaurantPhone = [];
        this.restaurantAddress = [];
        this.restaurantHours = [];
        this.restaurantInfo = [];
        this.restaurantTag = [];
    }
    Restaurant.prototype.addAddress = function (address) {
        this.restaurantAddress.push(address);
    };
    Restaurant.prototype.addPhone = function (phone) {
        this.restaurantPhone.push(phone);
    };
    Restaurant.prototype.addHour = function (hour) {
        this.restaurantHours.push(hour);
    };
    Restaurant.prototype.addInfo = function (info) {
        this.restaurantInfo.push(info);
    };
    Restaurant.prototype.addTag = function (info) {
        this.restaurantTag.push(info);
    };
    Restaurant.prototype.getAddress = function () {
        return this.restaurantAddress;
    };
    Restaurant.prototype.getPhone = function () {
        return this.restaurantPhone;
    };
    Restaurant.prototype.getHour = function () {
        return this.restaurantHours;
    };
    Restaurant.prototype.getInfo = function () {
        return this.restaurantInfo;
    };
    Restaurant.prototype.getTag = function () {
        return this.restaurantTag;
    };
    Restaurant.prototype.deleteAddress = function () {
    };
    Restaurant.prototype.deletePhone = function () {
    };
    Restaurant.prototype.deleteHour = function () {
    };
    Restaurant.prototype.deleteInfo = function () {
    };
    Restaurant.prototype.deleteTag = function () {
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdGF1cmFudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc3RhdXJhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVVNLG9CQUFtQixjQUFzQixFQUFTLE9BQWU7UUFBOUMsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRS9ELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFFM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBRTtJQUM1QyxDQUFDO0lBRU0sNkJBQVEsR0FBZixVQUFnQixLQUFhO1FBRXZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSw0QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUVyQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLElBQVk7UUFFckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNNLDJCQUFNLEdBQWIsVUFBYyxJQUFZO1FBRXBCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHTSwrQkFBVSxHQUFqQjtRQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDcEMsQ0FBQztJQUNNLDZCQUFRLEdBQWY7UUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sNEJBQU8sR0FBZDtRQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2xDLENBQUM7SUFFTSw0QkFBTyxHQUFkO1FBRU0sTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDakMsQ0FBQztJQUNNLDJCQUFNLEdBQWI7UUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDO0lBRU0sa0NBQWEsR0FBcEI7SUFHQSxDQUFDO0lBRU0sZ0NBQVcsR0FBbEI7SUFHQSxDQUFDO0lBRU0sK0JBQVUsR0FBakI7SUFHQSxDQUFDO0lBQ00sK0JBQVUsR0FBakI7SUFHQSxDQUFDO0lBQ00sOEJBQVMsR0FBaEI7SUFHQSxDQUFDO0lBQ1AsaUJBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDO0FBekZZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlc3RhdXJhbnRcclxue1xyXG5cclxuICAgIFxyXG4gICAgcmVzdGF1cmFudFBob25lIDogc3RyaW5nW107XHJcbiAgICByZXN0YXVyYW50QWRkcmVzcyA6IHN0cmluZ1tdO1xyXG4gICAgcmVzdGF1cmFudEhvdXJzIDogc3RyaW5nW107XHJcbiAgICByZXN0YXVyYW50SW5mbyA6IHN0cmluZ1tdO1xyXG4gICAgcmVzdGF1cmFudFRhZyA6IHN0cmluZ1tdO1xyXG4gICAgICBcclxuICAgICAgY29uc3RydWN0b3IocHVibGljIHJlc3RhdXJhbnROYW1lOiBzdHJpbmcsIHB1YmxpYyBncm91cElEOiBudW1iZXIpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLnJlc3RhdXJhbnRQaG9uZSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVzdGF1cmFudEFkZHJlc3MgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc3RhdXJhbnRIb3VycyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVzdGF1cmFudEluZm8gPSBbXTtcclxuICAgICAgICB0aGlzLnJlc3RhdXJhbnRUYWcgPSBbXTtcclxuICAgICAgfSAgXHJcblxyXG4gICAgICBwdWJsaWMgYWRkQWRkcmVzcyhhZGRyZXNzOiBzdHJpbmcpXHJcbiAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXVyYW50QWRkcmVzcy5wdXNoKGFkZHJlc3MpIDsgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBhZGRQaG9uZShwaG9uZTogc3RyaW5nKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGF1cmFudFBob25lLnB1c2gocGhvbmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgYWRkSG91cihob3VyOiBzdHJpbmcpXHJcbiAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXVyYW50SG91cnMucHVzaChob3VyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGFkZEluZm8oaW5mbzogc3RyaW5nKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGF1cmFudEluZm8ucHVzaChpbmZvKTtcclxuICAgICAgfVxyXG4gICAgICBwdWJsaWMgYWRkVGFnKGluZm86IHN0cmluZylcclxuICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhdXJhbnRUYWcucHVzaChpbmZvKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIHB1YmxpYyBnZXRBZGRyZXNzKClcclxuICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN0YXVyYW50QWRkcmVzcztcclxuICAgICAgfVxyXG4gICAgICBwdWJsaWMgZ2V0UGhvbmUoKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhdXJhbnRQaG9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGdldEhvdXIoKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhdXJhbnRIb3VycztcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGdldEluZm8oKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhdXJhbnRJbmZvO1xyXG4gICAgICB9XHJcbiAgICAgIHB1YmxpYyBnZXRUYWcoKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3RhdXJhbnRUYWc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBkZWxldGVBZGRyZXNzKClcclxuICAgICAge1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGRlbGV0ZVBob25lKClcclxuICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGRlbGV0ZUhvdXIoKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHB1YmxpYyBkZWxldGVJbmZvKClcclxuICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBwdWJsaWMgZGVsZXRlVGFnKClcclxuICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgfVxyXG59Il19