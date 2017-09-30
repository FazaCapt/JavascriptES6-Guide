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
cheers();