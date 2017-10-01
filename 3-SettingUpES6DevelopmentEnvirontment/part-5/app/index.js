// ================== Data Structures in es6 ==================
// === Writing a set

let a = new Set();
a.add(5);
a.add(43);
a.add('Wooho');
a.add({x:50, y: 200});

// === has => menginformasikan kalo kita memiliki nilai tsb
// console.log(a.has(7)); // False
console.log(a.has(5)); // True 

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

console.log(char_set);