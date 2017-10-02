// Clousers
// Remember their creation environtment and can reference independent variables within that environtment.
// eneble function factories.
// eneble private data

// === Clousures and scoping

let call = () => {
    let secret = 'es6 Rocks!'
    let reveal = () => {
        console.log(secret)
    }
    // reveal(); // dengan function ini maka nilai secret bisa keluar
    // === Cara 2:
    return reveal;
}

// console.log(secret); //Ini tidak akan terpanggil nilai dari secret

// call();

let unveil = call();
// unveil();

// ==== Function Factories

const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}

// let add_ness = addSuffix('ness');
// console.log(add_ness);

// let h = add_ness('Happi');
// console.log(h);

// let add_full = addSuffix('Full');
// let h = add_full('Fruit');
// console.log(h);

// ==== Contoh 2

// const product = (x) => {
//     return y => {
//         return y * x;
//     }
// }

// ==== Ubah bentuk menjadi:

const product = x => y => y * x;

let mult5 = product(5);
console.log(mult5(3));

let double = product(2);
console.log(double(9));