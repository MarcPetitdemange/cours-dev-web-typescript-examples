interface DataBaseUser{
    name: string;
}

class User{
    public name: string;
    showName() {
        console.log(this.name);
    }
}

interface Mapper<T, U> {
    fromDao(obj: T): U;
    toDao(obj: U): T;
}
const mapper: Mapper<DataBaseUser, User> = new class implements Mapper<DataBaseUser, User> {
    fromDao(obj: DataBaseUser): User {
        let user:User = new User();
        user.name = obj.name;
        return  user;
    }

    toDao(obj: User): DataBaseUser {
        return new User();
    }
}

const dbUser: DataBaseUser = {
    name: "Nelson Muntz"
}

mapper.fromDao(dbUser).showName();