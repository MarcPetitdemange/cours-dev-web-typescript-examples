class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const user = new User('Krusty the Clown',54);
console.log(user.name, user.age); //Krusty the Clown, 54