interface User {name: string}
function find(value: number): User | User[] {
    if(value == 1) return  {name: "Ralph Wiggum"}
    else return [{name:"Clancy Wiggum"}, {name: "Sarah Wiggum"}]
}

const users = find(Math.random() * 2);

if ("concat" in users) {
    users.forEach((user) => { console.log(user.name);});
}
else {
    console.log(users.name);
}
