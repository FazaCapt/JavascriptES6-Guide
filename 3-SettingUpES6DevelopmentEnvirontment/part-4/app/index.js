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

// import { Animals } from './Animal';

// class Lion extends Animals{
//     // Tanpa dibuatkan constructor variabel tetep bisa mengikuti animal
//     constructor(name, height, color){
//         super(name, height);
//         this.color = color;
//     }

//     hello() {
//         console.log(`Hi! I'm ${this.name} from Pride Rock!`)
//     }
// }

// let son = new Lion('Simba', 75, 'Golden');
// console.log(son);
// son.hello();

// let king = new Animals('Mufasa', 4.5);
// console.log(king);
// king.hello();

// ================== Static Methods in classes ============
// === Static merupakan sebuah keyword yang digunakan agar method dan property dapat diakses langsung dari Class tanpa harus melakukan instansiasi (class dirubah menjadi object)

class Calculator {
    static multiply(a, b) {
        return a * b;
    }

    static add(a, b) {
        return a + b;
    }
}

// let a = Calculator.multiply(4,5);
let a = Calculator.add(9,6);

// console.log(a);

// ====================== Prototypes ====================

function Wizard (name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () =>`I'm ${this.name} Potter from ${this.house}`
}

Wizard.prototype.pet_name;

// === Akan error bila pake arrow function
// Wizard.prototype.info = () => {
//     return `I have a ${this.pet} named ${this.pet_name}`
// }

// ==== Ini akan berhasil karena pake function bukan arraw
Wizard.prototype.info = function () {
    return `I have a ${this.pet} named ${this.pet_name}`
}

let harry = new Wizard('Harry porter', 'Grafindor', 'Owl');
harry.pet_name = "Hedwig";

console.log(harry.info());
// console.log(harry);
// console.log(harry.greet());