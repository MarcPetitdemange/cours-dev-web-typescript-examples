class User {
    private name: string;
    protected age: number;
}
class AuthenticatedUser extends User {
    token: string;
    update(name: string, age: number) {
        this.name = name; //Error --> Private
        this.age = age; //OK --> Protected
    }
}