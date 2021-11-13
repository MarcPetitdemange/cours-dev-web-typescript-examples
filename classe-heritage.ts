class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class AuthentificatedUser extends User{
    token: string;
    constructor(name: string, age: number, token: string) {
        super(name, age);
        this.token = token;
    }
}

const user = new User('Krusty the Clown',54);
const authentificatedUser = new AuthentificatedUser('Prof. Frink',41,
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1yIEJ1cm5zIFN1Y2tzIiwiaWF0IjoxNTE2MjM5MDIyfQ.mvgr2JZarBiOAmEbTNSInZaEoj8CQO7a1lmUkpQsmUY"
);