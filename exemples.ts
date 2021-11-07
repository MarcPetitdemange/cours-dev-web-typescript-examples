/*Façon 1*/
function add(x: number, y:number) : number {
    return x + y;
}

/*Façon 2*/
let myAdd: (x: number, y:number) => number =
    function (x: number, y:number ): number {return x + y;};

/*Façon 3*/
const obj = {
    add (x: number, y:number) : number {
        return x + y;
    }
}

