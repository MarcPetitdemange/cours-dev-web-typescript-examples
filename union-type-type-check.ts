interface User {name: string}
function find(value: number): User | User[] {
    if(value == 1) return  {name: "Ralph Wiggum"}
    else return [{name:"Clancy Wiggum"}, {name: "Sarah Wiggum"}]
}

const users = find(Math.random() * 2);

if ((users as User[]).concat) {
    (users as User[]).forEach((user:User) => {console.log((user.name))})
} else if ((users as User).name) {
    console.log((users as User).name);
}
