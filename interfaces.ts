let utilisateur: {name: string, age: number}; //Façon 1

interface User { //Façon 2
    name: string;
    age:number;
}

let user: User;

function test(user: User){
    console.log("name=" + user.name  + ", age= " + user.age);
}
test({name: 'Homer Simpson', age: 42});
