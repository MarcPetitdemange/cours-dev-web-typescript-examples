class Fetcher<T> {
    get(): T {

    }
    post(data: T) {
        return data;
    }
}
const fetcher = new Fetcher<number[]>();
fetcher.get().pop();
// Le mieux !