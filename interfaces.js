var utilisateur; //Façon 1
var user;
function test(user) {
    console.log("name=" + user.name + ", age= " + user.age);
}
test({ name: 'Homer Simpson', age: 42 });
