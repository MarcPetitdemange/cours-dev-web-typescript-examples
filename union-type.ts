interface User {name: string}
function find(value: number): User | User[] {
    if(value == 1) return  {name: "Ralph Wiggum"}
    else return [{name:"Clancy Wiggum"}, {name: "Sarah Wiggum"}]
}
find(Math.random() * 2).forEach(user => console.log(user)); // Error

(find(Math.random() * 2) as User[]).forEach(user => console.log(user)) // Ok
