function test<T>(val: T): T {
    return val;
}
test<number[]>([1, 2, 3]).forEach(() => {}); // OK
test([1, 2, 3]).forEach(() => {}); // OK