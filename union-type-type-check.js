function find(value) {
    if (value == 1)
        return { name: "Ralph Wiggum" };
    else
        return [{ name: "Clancy Wiggum" }, { name: "Sarah Wiggum" }];
}
var users = find(Math.random() * 2);
if (users.concat) {
    users.forEach(function (user) { console.log((user.name)); });
}
else if (users.name) {
    console.log(users.name);
}
