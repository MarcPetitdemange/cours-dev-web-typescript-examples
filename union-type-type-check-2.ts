interface User {name: string}
function find(value: number): User | User[] {
    if(value == 1) return  {name: "Ralph Wiggum"}
    else return [{name:"Clancy Wiggum"}, {name: "Sarah Wiggum"}]
}

function isArray(users: User | User[]): users is User[] {
    return (users as User[]).concat !== undefined;
}

const users = find(Math.random() * 2);

if (isArray(users)) { users.forEach((user:User) => { console.log(user)}) }
else { console.log(users.name); }
