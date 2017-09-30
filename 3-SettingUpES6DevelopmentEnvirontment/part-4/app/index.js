// ================= Defining Classes =====================

class Animals{
    constructor(name, height){
        this.name = name,
        this.height = height
    }

    hello(){
        console.log(`Hello My name is ${this.name}, from animal kingdom.`)
    }
}

let king = new Animals('Mufasa', 4.5);
console.log(king);
king.hello();