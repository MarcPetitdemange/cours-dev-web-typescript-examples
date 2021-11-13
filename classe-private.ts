class User {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {return this.name;}
}
const user = new User('Nicolas', 28);
console.log(user.name, user.age); // Error