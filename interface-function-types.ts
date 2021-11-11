interface User {
    readonly name: string;
    age: number;
    address?: string;

    move(newAddress: string): void;
    isAdult(): boolean;
}

interface Simpson {
    readonly name: string;
    age: number;
    address?: string;

    move(newAddress: string): void;
    isAdult(): boolean;
}

let user: User = {
    name: 'Maggie Simpson',
    age: 1,
    move(newAdress: string ): void{
        this.address = newAdress;
    },
    isAdult(): boolean {
        return this.age > 18;
    }
}
