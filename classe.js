var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User('Krusty the Clown', 54);
console.log(user.name, user.age); //Krusty the Clown, 54
