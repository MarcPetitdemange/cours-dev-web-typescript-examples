function find(value) {
    if (value == 1)
        return { name: "Ralph Wiggum" };
    else
        return [{ name: "Clancy Wiggum" }, { name: "Sarah Wiggum" }];
}
var users = find(Math.random() * 2);
if ("concat" in users) {
    users.forEach(function (user) { console.log(user.name); });
}
else {
    console.log(users.name);
}
