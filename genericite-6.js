var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.showName = function () {
        console.log(this.name);
    };
    return User;
}());
var mapper = new /** @class */ (function () {
    function class_1() {
    }
    class_1.prototype.fromDao = function (obj) {
        var user = new User();
        user.name = obj.name;
        return user;
    };
    class_1.prototype.toDao = function (obj) {
        return new User();
    };
    return class_1;
}());
var dbUser = {
    name: "Nelson Muntz"
};
mapper.fromDao(dbUser).showName();
