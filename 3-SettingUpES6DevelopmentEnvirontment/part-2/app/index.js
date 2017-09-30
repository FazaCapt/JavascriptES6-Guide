// Jalankan dulu di terminal dengan cara 'npm run start'

// =============== Assaigment with let and const ==========

// === Var dan let
var limit = 1000;
// let limit = 1000;
// limit += 100;
limit = 300;
// console.log(limit);

// === Const
const emails = ["faza@gmail.com", "Shofa@gmail.com", "Qipli@gmail.com"];
// emails = []; // Error
// emails.push("Rifqi@gmail.com");
// console.log(emails);

// =============== Control with block scoping ==========

// let tall = 200;

// {
//     let tall = 30;
//     console.log('Backstage', tall);
// }

// console.log('overall veneu tall', tall);


// ==== Const

// const tall = 200;

// {
//     const tall = 30;
//     console.log('Backstage', tall);
// }

// console.log('overall veneu tall', tall);

function hello() {
    let message = 'Hello';
    console.log(message);
}

function greeting() {
    let message = 'How are you?';
    console.log(message);
}

// hello();
// greeting();

// =============== template literals ==========

// let a = `good`;
// let b = `${a} morning`; // good morning

// console.log(b);

// =============== Operating and Destucting ==========

// ==== Spread operator and rest parameters

// let a = [10, 20, 30];
// let b = [5, ...a, 40];

// console.log(b);

function collect(...a){
    console.log(a);
}

// collect(10,20,30,40);

// ===== Destructuring Assignment on Arrays and Objects 

let z = [4,5,6];

// let four = z[0];
// let five = z[1];
// === Bisa di ubah seperti ini
let [four, five] = z;

// console.log(four, five);

let animals = ['simba', 'zazu', 'ed'];
let [lion, bird] = animals;

let king = {name: 'mufasa', kids: 1};
// let name = king.name;
// let kids = king.kids;
// ==== Bisa diubah bentuknya
// let {name, kids} = king;

// console.log(name, kids);

// ==== Contoh lagi

let son = {name: 'simba', parents: 2}
let name, parents;
// {name, parent} = son; // ini tidak bisa harus pake tanda kurung
({name, parents} = son)

console.log(name, parents);