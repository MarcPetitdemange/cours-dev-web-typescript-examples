class Fetcher {
    get<T>(): T {
        /* ... */}
    post<T>(data: T){
        /* ... */}
}
const fetcher =
    new Fetcher();
fetcher.get<number[]>().pop();
// Mieux mais on peut encore faire un effort