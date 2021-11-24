function find(value) {
    if (value == 1)
        return { name: "Ralph Wiggum" };
    else
        return [{ name: "Clancy Wiggum" }, { name: "Sarah Wiggum" }];
}
find(Math.random() * 2).forEach(function (user) { return console.log(user); }); // Error
find(Math.random() * 2).forEach(function (user) { return console.log(user); }); // Ok
