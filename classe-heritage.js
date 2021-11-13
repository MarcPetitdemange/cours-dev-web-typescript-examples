var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var AuthentificatedUser = /** @class */ (function (_super) {
    __extends(AuthentificatedUser, _super);
    function AuthentificatedUser(name, age, token) {
        var _this = _super.call(this, name, age) || this;
        _this.token = token;
        return _this;
    }
    return AuthentificatedUser;
}(User));
var user = new User('Krusty the Clown', 54);
var authentificatedUser = new AuthentificatedUser('Prof. Frink', 41, "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1yIEJ1cm5zIFN1Y2tzIiwiaWF0IjoxNTE2MjM5MDIyfQ.mvgr2JZarBiOAmEbTNSInZaEoj8CQO7a1lmUkpQsmUY");
