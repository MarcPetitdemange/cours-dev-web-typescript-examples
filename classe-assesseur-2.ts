class User {
    private firstName: string;
    private lastName: string;

    get fullName(): string { return `${this.firstName} ${this.lastName};`}
    set fullName(fullName: string) {
        [this.firstName, this.lastName] = fullName.split( ' ');
    }
}
