function find(value) {
    if (value == 1)
        return { name: "Ralph Wiggum" };
    else
        return [{ name: "Clancy Wiggum" }, { name: "Sarah Wiggum" }];
}
function isArray(users) {
    return users.concat !== undefined;
}
var users = find(Math.random() * 2);
if (isArray(users)) {
    users.forEach(function (user) { console.log(user); });
}
else {
    console.log(users.name);
}
