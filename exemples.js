/*Façon 1*/
function add(x, y) {
    return x + y;
}
/*Façon 2*/
var myAdd = function (x, y) { return x + y; };
/*Façon 3*/
var obj = {
    add: function (x, y) {
        return x + y;
    }
};
