function fonctionTest<T>(val: T): T {
    console.log(val.length);
    return val;
}
fonctionTest([1, 2, 3]).forEach(() => {}); // OK ? => Non erreur à la compilation

function fonctionTestCorrection<T>(val: T[]): T[] {
    console.log(val.length); return val;
}
function fonctionTestCorrection2<T>(val: Array<T>): Array<T>{
    console.log(val.length); return val;
}