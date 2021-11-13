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
    function User() {
    }
    return User;
}());
var AuthenticatedUser = /** @class */ (function (_super) {
    __extends(AuthenticatedUser, _super);
    function AuthenticatedUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthenticatedUser.prototype.update = function (name, age) {
        this.name = name; //Error --> Private
        this.age = age; //OK --> Protected
    };
    return AuthenticatedUser;
}(User));
