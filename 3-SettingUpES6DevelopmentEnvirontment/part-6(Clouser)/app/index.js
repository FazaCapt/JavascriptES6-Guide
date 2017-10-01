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
unveil();