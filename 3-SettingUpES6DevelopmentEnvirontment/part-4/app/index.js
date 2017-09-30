// ================= Defining Classes =====================
// ==== Buat di file animal.js baru
// class Animals{
//     constructor(name, height){
//         this.name = name,
//         this.height = height
//     }

//     hello(){
//         console.log(`Hello My name is ${this.name}, from animal kingdom.`)
//     }
// }

// ================= Inheritance =========================

import { Animals } from './Animal';

class Lion extends Animals{
    // Tanpa dibuatkan constructor variabel tetep bisa mengikuti animal
    constructor(name, height, color){
        super(name, height);
        this.color = color;
    }

    hello() {
        console.log(`Hi! I'm ${this.name} from Pride Rock!`)
    }
}

let son = new Lion('Simba', 75, 'Golden');
console.log(son);
son.hello();

// let king = new Animals('Mufasa', 4.5);
// console.log(king);
// king.hello();