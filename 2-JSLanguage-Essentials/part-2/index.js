// ============ If statement ======================

// if ( 8 > 13 ){
//     console.log('8 is greeter');
// } else {
//     console.log('8 is not greeter');
// }

// Kalo dalam stetmentnya tidak ada  else dia tidak akan keluar karena bernilai 'false'

// var a = 10;

// if ( 7 > a ){
//     console.log('8 is greeter');
// } else if ( 15 > a ){
//     console.log('15 is greeter');
// } else {
//     console.log('8 is not greeter');
// }

// var check = function (number) {
//     if (number % 2 == 0) {
//         console.log(number + ' is even');
//     } else {
//         console.log(number + ' is odd');
//     }
// }

// check(4);
// check(7);

// ================ Switch Statements ===================

// var x = 9;

// switch(x){
//     case 1: 
//         console.log("the number is one");
//         break;
//     case 2: 
//         console.log("the number is two");
//         break;
//     case 3: 
//         console.log("the number is three");
//         break
//     default:
//         console.log("the number is " + x );

// }

// Harus menggunakan breaak supaya tidak mencetak kembali ke case 2 dan 3


// =============== For loop ===================
// === untuk perulangan
// console.log(1);
// console.log(2);
// console.log(3);

// === Jadinya begini
// === i = i+1 => i++
// for (var i = 0; i < 5; i++) {
//     console.log(i)
// } 

// var names = ["Frodo", "Godzila", "Pecy"];

// for(var i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// =============== While loop ===================

var names = ["Frodo", "Godzila", "Pecy"];
var i = 0;

// while (i < names.length){
//     console.log(names[i]);
//     i++ // Kalo tidak ada increment dia akan menulis frodo berulang-ulang
// }

// ==== Manggunakan do while

// do {
//     console.log(names[i]);
//     i++;
// } 
// while (i < names.length);
// while(i < 0);

// === Ini tak akan bisa jalan jika tanpa do

while(i < 0){
    console.log(names[i]);
    i++;
}