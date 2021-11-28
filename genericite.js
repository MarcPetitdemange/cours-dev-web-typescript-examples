function test(val) {
    return val;
}
test([1, 2, 3]).split(', ');
//Compile mais l'erreur apparait à l'execution
// --------------------------------------------------
function test2(val) {
    return val;
}
test2([1, 2, 3]).split(', ');
// Echoue immédiatement à la compilation
