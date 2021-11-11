var user = {
    name: 'Maggie Simpson',
    age: 1,
    move: function (newAdress) {
        this.address = newAdress;
    },
    isAdult: function () {
        return this.age > 18;
    }
};
