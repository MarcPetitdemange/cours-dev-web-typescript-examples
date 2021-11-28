function fonctionTest(val) {
    console.log(val.length);
    return val;
}
fonctionTest([1, 2, 3]).forEach(function () { }); // OK ? => Non erreur à la compilation
function fonctionTestCorrection(val) {
    console.log(val.length);
    return val;
}
function fonctionTestCorrection2(val) {
    console.log(val.length);
    return val;
}
