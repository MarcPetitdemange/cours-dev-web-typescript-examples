class User {
    private readonly name: string;
    private age: number;
    private address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name; this.age = age; this.address = address;
    }
    changeName(name: string) {
        this.name = name; //Error
    }
}