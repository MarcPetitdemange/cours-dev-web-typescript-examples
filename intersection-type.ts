interface AuthenticatedUser {token: string};
interface User {name: string};

function find(): User & AuthenticatedUser {
    return {name: "Maud Flanders", token: "IGZA548UA88ZFGU"};
}
const user = find();
console.log(user.name, user.token);
