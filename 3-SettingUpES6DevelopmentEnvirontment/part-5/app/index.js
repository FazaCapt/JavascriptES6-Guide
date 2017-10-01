// ================== Data Structures in es6 ==================
// === Writing a set

// let a = new Set();
// a.add(5);
// a.add(43);
// a.add('Wooho');
// a.add({x:50, y: 200});

// === has => menginformasikan kalo kita memiliki nilai tsb
// console.log(a.has(7)); // False
// console.log(a.has(5)); // True 

let numbers = [5, 7, 8, 9, 12, 45];
let numSet = new Set(numbers);

// console.log(numSet);

// ==== Memberikan informasi nilai yang ada di set
// === values
// for (let element of numSet.values()){
//     console.log(element);
// }

// ======= Untuk mengetahui jumlah huruf yang berbeda

let chars = 'adjakjsdmasdasdjasfmacajxcasmcaca';
let char_arr = chars.split("");
let char_set = new Set(char_arr);

// console.log(char_set);

// ============ Maps ==================

// Maps have keys and values 
// Maps share much similarity to objects
// but maps beat object with superior keys, and the size property

// === Contoh 1:
let a = new Map();
let key_1 = 'String Key';
let key_2 = { a: 'key' };
let key_3 = function(){};

a.set(key_1, 'return value for a string key');
a.set(key_2, 'return value for an object key');
a.set(key_3, 'return value for a function key');

// console.log(a); 

// ==== Contoh 2:

let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr);
console.log(valMap);

// === Contoh 3:

// for (let [key, values] of valMap.entries()){
//     console.log(`${key} points to ${values}`);
// }

// === Contoh 4:

// ==== untuk mengetahui jumalah huruf dan ada berapa huruf yang tidak sama
let string = 'akdjsdasmcasjafafnacajsadjasalkmascahfwoi';

let letters = new Map();

for (let i = 0; i< string.length; i++){
    let letter = string[i];
    // if (letters.has(letter) == false) => Diubah jadi
    if(!letters.has(letter)){
        letters.set(letter, 1);
    } else {
        letters.set(letter, letters.get(letter) + 1);
    }
}

console.log(letters);