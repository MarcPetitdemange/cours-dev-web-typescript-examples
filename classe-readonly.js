var User = /** @class */ (function () {
    function User(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    User.prototype.changeName = function (name) {
        this.name = name; //Error
    };
    return User;
}());
