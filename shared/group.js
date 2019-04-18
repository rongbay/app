"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Group = /** @class */ (function () {
    function Group(groupName, groupID) {
        this.groupName = groupName;
        this.groupID = groupID;
        this.groupMembers = [];
        this.groupPreferences = [];
    }
    Group.prototype.addMembers = function (member) {
        this.groupMembers.push(member);
    };
    Group.prototype.addPreferences = function (preference) {
        this.groupPreferences.push(preference);
    };
    Group.prototype.getPreferences = function () {
        return this.groupPreferences;
    };
    Group.prototype.getGroupMembers = function () {
        return this.groupMembers;
    };
    Group.prototype.deleteMembers = function () {
    };
    Group.prototype.deletePreferences = function () {
    };
    return Group;
}());
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBSU0sZUFBbUIsU0FBaUIsRUFBUyxPQUFlO1FBQXpDLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRTFELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFFO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLDBCQUFVLEdBQWpCLFVBQWtCLE1BQWM7UUFFMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUU7SUFDdEMsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLFVBQXNCLFVBQWtCO1FBRWxDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLDhCQUFjLEdBQXJCO1FBRU0sTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtJQUNsQyxDQUFDO0lBQ00sK0JBQWUsR0FBdEI7UUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBRTtJQUNoQyxDQUFDO0lBRU0sNkJBQWEsR0FBcEI7SUFHQSxDQUFDO0lBRU0saUNBQWlCLEdBQXhCO0lBR0EsQ0FBQztJQUNQLFlBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDO0FBdENZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdyb3VwXHJcbntcclxuICAgICAgZ3JvdXBNZW1iZXJzOiBzdHJpbmdbXTtcclxuICAgICAgZ3JvdXBQcmVmZXJlbmNlczogc3RyaW5nW107IFxyXG4gICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ3JvdXBOYW1lOiBzdHJpbmcsIHB1YmxpYyBncm91cElEOiBudW1iZXIpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmdyb3VwTWVtYmVycyA9IFtdIDtcclxuICAgICAgICB0aGlzLmdyb3VwUHJlZmVyZW5jZXMgPSBbXTsgXHJcbiAgICAgIH0gIFxyXG5cclxuICAgICAgcHVibGljIGFkZE1lbWJlcnMobWVtYmVyOiBzdHJpbmcpXHJcbiAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ncm91cE1lbWJlcnMucHVzaChtZW1iZXIpIDsgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBhZGRQcmVmZXJlbmNlcyhwcmVmZXJlbmNlOiBzdHJpbmcpXHJcbiAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ncm91cFByZWZlcmVuY2VzLnB1c2gocHJlZmVyZW5jZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBnZXRQcmVmZXJlbmNlcygpXHJcbiAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBQcmVmZXJlbmNlc1xyXG4gICAgICB9XHJcbiAgICAgIHB1YmxpYyBnZXRHcm91cE1lbWJlcnMoKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyb3VwTWVtYmVycyA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBkZWxldGVNZW1iZXJzKClcclxuICAgICAge1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGRlbGV0ZVByZWZlcmVuY2VzKClcclxuICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgfVxyXG59XHJcblxyXG4iXX0=