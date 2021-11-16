enum HttpCode {
    OK = 200,
    Unauthorized = 401 ,
    Forbidden = 403,
    NotFound = 404,
    ImATeaPot = 418
}

console.log(HttpCode.OK);
// 200
console.log(HttpCode.ImATeaPot);
// 418
