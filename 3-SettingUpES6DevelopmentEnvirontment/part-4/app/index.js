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

console.log(a);