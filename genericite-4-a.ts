class Fetcher {
    get(): any {
        let value: any;
        return value;
    }
    post(data: any) {
        return data
    }
}
const fetcher = new Fetcher();
fetcher.get().pop();
//Le code marche mais n'est pas safe
