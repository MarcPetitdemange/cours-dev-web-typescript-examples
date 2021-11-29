var Fetcher = /** @class */ (function () {
    function Fetcher() {
    }
    Fetcher.prototype.get = function () {
        var value;
        return value;
    };
    Fetcher.prototype.post = function (data) {
        return data;
    };
    return Fetcher;
}());
var fetcher = new Fetcher();
fetcher.get().pop();
//Le code marche mais n'est pas safe
