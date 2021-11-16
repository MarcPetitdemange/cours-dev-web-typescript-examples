var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["Unauthorized"] = 401] = "Unauthorized";
    HttpCode[HttpCode["Forbidden"] = 403] = "Forbidden";
    HttpCode[HttpCode["NotFound"] = 404] = "NotFound";
    HttpCode[HttpCode["ImATeaPot"] = 418] = "ImATeaPot";
})(HttpCode || (HttpCode = {}));
console.log(HttpCode.OK);
// 200
console.log(HttpCode.ImATeaPot);
// 418
