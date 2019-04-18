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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBTU0sZUFBbUIsU0FBaUIsRUFBUyxPQUFlO1FBQXpDLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRTFELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFFO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLDBCQUFVLEdBQWpCLFVBQWtCLE1BQWM7UUFFMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUU7SUFDdEMsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLFVBQXNCLFVBQWtCO1FBRWxDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLDhCQUFjLEdBQXJCO1FBRU0sTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtJQUNsQyxDQUFDO0lBQ00sK0JBQWUsR0FBdEI7UUFFTSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBRTtJQUNoQyxDQUFDO0lBRU0sNkJBQWEsR0FBcEI7SUFHQSxDQUFDO0lBRU0saUNBQWlCLEdBQXhCO0lBR0EsQ0FBQztJQUNQLFlBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdyb3VwXHJcbntcclxuICAgICAgLy93aWxsIGJlIHR5cGUgcGVyc29uXHJcbiAgICAgIGdyb3VwTWVtYmVyczogc3RyaW5nW107XHJcbiAgICAgIC8vd2lsbCBiZSB0eXBlIGdyb3VwUHJlZmVyZW5jZVxyXG4gICAgICBncm91cFByZWZlcmVuY2VzOiBzdHJpbmdbXTsgXHJcbiAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncm91cE5hbWU6IHN0cmluZywgcHVibGljIGdyb3VwSUQ6IG51bWJlcilcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBNZW1iZXJzID0gW10gO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBQcmVmZXJlbmNlcyA9IFtdOyBcclxuICAgICAgfSAgXHJcblxyXG4gICAgICBwdWJsaWMgYWRkTWVtYmVycyhtZW1iZXI6IHN0cmluZylcclxuICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdyb3VwTWVtYmVycy5wdXNoKG1lbWJlcikgOyBcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGFkZFByZWZlcmVuY2VzKHByZWZlcmVuY2U6IHN0cmluZylcclxuICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdyb3VwUHJlZmVyZW5jZXMucHVzaChwcmVmZXJlbmNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGdldFByZWZlcmVuY2VzKClcclxuICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncm91cFByZWZlcmVuY2VzXHJcbiAgICAgIH1cclxuICAgICAgcHVibGljIGdldEdyb3VwTWVtYmVycygpXHJcbiAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBNZW1iZXJzIDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGRlbGV0ZU1lbWJlcnMoKVxyXG4gICAgICB7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgZGVsZXRlUHJlZmVyZW5jZXMoKVxyXG4gICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbn1cclxuXHJcbiJdfQ==