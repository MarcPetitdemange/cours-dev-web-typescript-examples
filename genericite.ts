function test(val: any): any {
    return val;
}
test([1, 2, 3]).split(', ');
//Compile mais l'erreur apparait à l'execution

// --------------------------------------------------

function test2<T>(val: T): T {
    return val;
}
test2([1, 2, 3]).split(', ');
// Echoue immédiatement à la compilation