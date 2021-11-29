class Fetcher<T> {
    get(): T {
        let value: T;
        return value;
    }
    post(data: T) {
        return data;
    }
}
const fetcher = new Fetcher<number[]>();
fetcher.get().pop();
// Le mieux !
