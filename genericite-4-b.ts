class Fetcher {
    get<T>(): T {
        let value: T;
        return value;
    }
    post<T>(data: T){
        return data
    }
}
const fetcher = new Fetcher();
fetcher.get<number[]>().pop();
// Mieux mais on peut encore faire un effort
