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
// dog.bark();

// ================= Arrays dan array Methods ==========
// Arrays Method: https://www.w3schools.com/js/js_array_methods.asp
// Array: https://www.w3schools.com/js/js_arrays.asp
// Sorting Array: https://www.w3schools.com/js/js_array_sort.asp

var points = ['12','35', '24', '9', '45'];

// var first = points[0];
// var last = points.pop();

// points.push(32);

// console.log(points);
// console.log(points, last)
// console.log(first);
// console.log(points.length);

// =========== Using the JavaScript Keyword new

var friends = new Array('Bayu', 'Rifqi', 'Panji', "Qipli");
var person = {
    firstname: 'John', 
    lastname: 'Doe', 
    age: 46
};

// === Access the Full Array
// console.log(friends);
// === Access the Elements of an Array
// console.log(friends[0]);
// === Arrays are Objects
// console.log(person.firstname)

// === Array Elements Can Be Objects
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

// === Array Properties and Methods
// var x = cars.length;   // The length property returns the number of elements
// var y = cars.sort();   // The sort() method sorts arrays 

// === The length Property

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length; // the length of fruits is 4 

// ==== Looping Array Elements

var fruits, text, flen, i;

fruits = ['Banana', 'Orange', 'Apple', 'Mongo'];
flen = fruits.length;
text = '<ul>';

for (i = 0; i < flen; i++) {
    text += '<li>' + fruits[i] + '</li>';
}

text += "</ul>";

// console.log(text);
// document.getElementById('app').innerHTML = text;

// ==== Adding Array Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon"); // adds a new element (Lemon) to fruits 
fruits[fruits.length] = "Lemon"; 
fruits[6] = "Lemon"; // adds a new element (Lemon) to fruits 

// ==== Associative Arrays

var person = [];
person[0] = 'Faza';
person[1] = 'Fahamsyah';
person[2] = 46;
person[3] = 'Unpad';

// console.log(person[0] + ' ' + person.length)

// WARNING !!
// If you use named indexes, JavaScript will redefine the array to a standard object.
// After that, some array methods and properties will produce incorrect results.

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
// var x = person.length; // person.length will return 0
// var y = person[0]; // person[0] will return undefined 

// ===== The Difference Between Arrays and Objects

// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
// Arrays are a special kind of objects, with numbered indexes.

// ===== When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

// ====== Avoid new Array()
// There is no need to use the JavaScript's built-in array constructor new Array().
// Use [] instead.
// These two different statements both create a new empty array named points:

// var points = new Array();         // Bad
// var points = [];                  // Good 

var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good 


var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)

var points = new Array(40);       // Creates an array with 40 undefined elements !!!!! 

// ====== How to Recognize an Array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// typeof fruits;             // returns object 

// Array.isArray(fruits);     // returns true 

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
} 

// document.getElementById("app").innerHTML = isArray(fruits);

// fruits instanceof Array     // returns true 


// ============ JavaScript Array Methods =====================

// ===== Converting Arrays to Strings
// console.log(fruits.toString());
// console.log(fruits.join(" * "));

// ===== Popping and Pushing

// console.log(fruits.pop());              // Removes the last element ("Mango") from fruits 
var x = fruits.pop();      // the value of x is "Mango" 
// console.log(x);

// ====== Pushing

fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits 
var x = fruits.push("Kiwi");   //  the value of x is 5 

// ==== Shifting Elements

// console.log(fruits.shift());            // Removes the first element "Banana" from fruits 
console.log(fruits.unshift("Lemon"));    // Adds a new element "Lemon" to fruits 
fruits.unshift("Lemon");    // Returns 5 

// ==== Changing Elements

fruits[0] = "Kiwi"; 

fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruit 

// ==== Deleting Elements

// delete fruits[0];

// ==== Splicing an Array
// fruits.splice(2, 0, "Lemon", "Kiwi");

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// ===== Using splice() to Remove Elements
// fruits.splice(0, 1);        // Removes the first element of fruits 
// The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.

// ==== Merging (Concatenating) Arrays

// Example (Merging Two Arrays)
// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias","Linus"];
// var myChildren = myGirls.concat(myBoys);     // Concatenates (joins) myGirls and myBoys 

// Example (Merging Three Arrays)
// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias","Linus"];
// var arr3 = ["Robin", "Morgan"];
// var myChildren = arr1.concat(arr2, arr3);     // Concatenates arr1 with arr2 and arr3 

// Example (Merging an Array with Values)
// var arr1 = ["Cecilie", "Lone"];
// var myChildren = arr1.concat(["Emil", "Tobias","Linus"]); 

// Slicing an Array
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1);
// var citrus = fruits.slice(3);
// var citrus = fruits.slice(1, 3);
// var citrus = fruits.slice(2);

// Automatic toString()
// fruits.toString();


// =========== JavaScript Sorting Arrays ===============

// ===== Sorting an Array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();            // Sorts the elements of fruits alphabet

// ==== Reversing an Array

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();            // Sorts the elements of fruits
// fruits.reverse();         // Reverses the order of the elements 

// ===== Numeric Sort

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});

// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});

// ======== The Compare Function

// function(a, b){return a-b}

var points = [40,100, 1, 5, 25, 10];
// document.getElementById('app').innerHTML = points;

function myFunction1(){
    points.sort();
    // document.getElementById('app').innerHTML = points;
}

function myFunction2() {
    points.sort(function(a,b) { return a - b });
    // document.getElementById('app').innerHTML = points;
}

// ===== Sorting an Array in Random Order

points.sort(function(a, b){return 0.5 - Math.random()});

// ===== Find the Highest (or Lowest) Array Value

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value 

// ==== Sorting descending:
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value

// Using Math.max() on an Array
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
// Math.max.apply([1, 2, 3]) is equivalent to Math.max(1, 2, 3).
myArrayMin(points)

// Using Math.min() on an Array
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

// My Min / Max JavaScript Methods

function myArrayMax(arr) {
    var len = arr.length
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
} 
// ==== Example (Find Min)
function myArrayMin(arr) {
    var len = arr.length
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
} 

// Sorting Object Arrays
// var cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}]; 


// cars.sort(function(a, b){return a.year - b.year}); 

// displayCars();

// function myFunction() {
//     cars.sort(function(a, b){return a.year - b.year});
//     displayCars();
// }

// function displayCars() {
//   document.getElementById("demo").innerHTML =
//   cars[0].type + " " + cars[0].year + "<br>" +
//   cars[1].type + " " + cars[1].year + "<br>" +
//   cars[2].type + " " + cars[2].year;
// }

// displayCars();

// Comparing string properties is a little more complex:

// function myFunction() {
//     cars.sort(function(a, b){
//         var x = a.type.toLowerCase();
//         var y = b.type.toLowerCase();
//         if (x < y) {return -1;}
//         if (x > y) {return 1;}
//         return 0;
//     });
//     displayCars();
// }

// function displayCars() {
//   document.getElementById("demo").innerHTML =
//   cars[0].type + " " + cars[0].year + "<br>" +
//   cars[1].type + " " + cars[1].year + "<br>" +
//   cars[2].type + " " + cars[2].year;
// }


// ========== Test Case Weighing Buddy (functions and objects) ==========
// var dog = {
//     name: 'Buddy',
//     breed: 'Golden Retriever',
//     weight: 60
//   };
  
//   function weigh(x) {
//       return x;
//   }
  
//   weigh(dog.weight);
  

// ================= Boolean and Comparison Operators ======

var a = true;
// console.log(a);
// return true (dan kebalikannya false)

var a = 5 == 5;
// console.log(a); // true

var b = 5 == 8;
// console.log(b); //false
// <, >, <=, >= sama aja

// === Boolean Values


// YES / NO
// ON / OFF
// TRUE / FALSE

// === The Boolean() Function
// Boolean(10 > 9)        // returns true 
// (10 > 9)              // also returns true
// 10 > 9                // also returns true 

// Everything With a "Real" Value is True
// 100

// 3.14

// -15

// "Hello"

// "false"

// 7 + 1 + 3.14

// 5 < 6

// Everything Without a "Real" Value is False

// The Boolean value of 0 (zero) is false:
var x = 0;
Boolean(x);       // returns false 

// The Boolean value of -0 (minus zero) is false:
var x = -0;
Boolean(x);       // returns false 

// The Boolean value of "" (empty string) is false:
var x = "";
Boolean(x);       // returns false 

// The Boolean value of undefined is false:
var x;
Boolean(x);       // returns false 

// The Boolean value of null is false:
var x = null;
Boolean(x);       // returns false 

// The Boolean value of false is (you guessed it) false:
var x = false;
Boolean(x);       // returns false 

// The Boolean value of NaN is false:
var x = 10 / "H";
Boolean(x);       // returns false 

// ===== Booleans Can be Objects

var x = false;
var y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object 

var x = false;             
var y = new Boolean(false);

// (x == y) is true because x and y have equal values 

var x = false;             
var y = new Boolean(false);

// (x === y) is false because x and y have different types 

var x = new Boolean(false);             
var y = new Boolean(false);

// (x == y) is false because objects cannot be compared 