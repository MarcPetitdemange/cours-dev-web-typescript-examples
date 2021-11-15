class User {

    private _name: string;
    private _age: number;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (this._age < 0) {
            throw new Error('Invalid age')
        }
        this._name = value;
    }
}
