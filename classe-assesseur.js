class User {
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (this._age < 0) {
            throw new Error('Invalid age');
        }
        this._name = value;
    }
}
