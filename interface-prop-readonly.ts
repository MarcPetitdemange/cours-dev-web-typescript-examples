interface User {
    readonly name: string;
    age: number;
    address: string;
}

let user1: User = {
    name: 'Ned Flanders',
    age: 48,
    address: '744 Evergreen Terrace, Springfield'
};

user1.name = 'Moe'; // Erreur
