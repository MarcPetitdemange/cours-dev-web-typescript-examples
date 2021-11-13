var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () { return this.name; };
    return User;
}());
var user = new User('Nicolas', 28);
console.log(user.name, user.age); // Error
