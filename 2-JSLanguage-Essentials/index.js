// Syntax , Statement and Data Types

var a, b;
a = 'Hello';
b = a + "World";
// console.log(b);
// Maka return b = Hello World
// Tanda kutip untuk string boleh satu atau 2
// kalo buat number tidak usah pake tanda kutip

// Ciri variables dan tugasnya
// Nama Variabel tidak boleh 'var', pisah
// ini boleh $_a, Faza_Fahamsyah, FazaFahamsyah


// Operator
var z = 10 + 4 - 2;
// * , -, +, /, %
// console.log(z);


// ========= Test Case ===========
function check(){
    var a = 10;
    var b = a + 5;
    return b;
}

// console.log(check());

// ============= Function (1) ===============
function print1(){
    console.log("A working function");
}

// print1();

// ============= Function (2) ===============
function print(a){
    console.log(a);
}

// print('Mau ngeprint faza ganteng');

// ============= Function (3) ===============
function print(a, b, c){
    console.log(a + b + c);
}

// print('satu', ' dua', ' tiga');

// ============= Function (4) ===============
var print = function(a, b, c){
    console.log(a + b + c);
}

// print('satu', ' dua', ' tiga');

// ============= Function (4) ===============

var multiply = function(a,b){
    return a * b;
}

var product = multiply(50,30);
// console.log(product);


// =========== Object ==================

var dog = {
    name : "Buddy",
    age : 2,
    breed: 'Golden Retriver',
    weight: 75,
    // Function dalam function
    bark: function() {
        console.log('Gook!')
    }
}

// console.log(dog);
// console.log(dog.name);
// console.log(dog['breed']);
dog.bark();