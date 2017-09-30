// ==================== Arrow functions =========

// === Contoh 1
// function cheers(){
//     console.log('wooohoooo');
// }

// cheers();

// === Contoh 2 - ubah bentuk functionnya

// var cheers = function(){
//     console.log('wooohoooo');
// }

// cheers();

// === contoh 3 - 

// setTimeout(function(){
//     console.log('itung sampai 3 detik');
// }, 3000);

// === dengan memakai arrow functions

// setTimeout(()=> {
//     console.log('ini menggunakan arraw functions');
// }, 3000);

let cheers = () => {
    console.log('arraw function bentuk 2');
}

// console.log(cheers);
// cheers();


// ==================== Map and filter method =========
// ==== Map
let values = [20, 30, 40];

// ==== Cara 1:
// let double = (n) => {
//     return n * 2;
// }

// let doubled = values.map(double);
// console.log(doubled);

// ==== Cara 2:

// let doubled = values.map((n) => {
//     return n * 2;
// });

// console.log(doubled);

// ==== Cara 3:

// let doubled = values.map((n) => n * 3);

// console.log(doubled);

// ===== Filter

let points = [13, 25, 32, 56, 70, 75, 80, 89, 90];

// === Cara 1
// let highScores = points.filter((n) => {
//     return n < 50;
// });

// === Cara 2
let highScores = points.filter((n) => n > 50);

// console.log(highScores);

// ===================== String Helper Methods =============

// let b = 'faza' + 'aa'.repeat(50);
let b = `Faza ${"aa".repeat(50)}`;
// console.log(b);

// =============== String helper methods ==============

// console.log('Butterfly'.startsWith('Butter')); // bila dimualai, true, Beda besar kecil false.
// console.log('Butterfly'.endsWith('fly')); // bila dikhir, true, beda besar kecil atau bukan termasuk dari kata tersebut 'false'
// console.log('butterfly'.includes('tt')); // apapun yang sama dengan dengan kata butterfly dia akan bernilai true.


// ================ Number Checking ==================

const addToCart = (item, number) => {
    // return Number.isFinite(number);
    return Number.isSafeInteger(number);
}

// number: 5, 8, etc || true
// Infinity || false
// console.log(addToCart('shirt', Infinity));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
console.log(addToCart('shirt', Math.pow(5,7)));