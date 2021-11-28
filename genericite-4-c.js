var Fetcher = /** @class */ (function () {
    function Fetcher() {
    }
    Fetcher.prototype.get = function () {
    };
    Fetcher.prototype.post = function (data) {
        return data;
    };
    return Fetcher;
}());
var fetcher = new Fetcher();
fetcher.get().pop();
// Le mieux !
