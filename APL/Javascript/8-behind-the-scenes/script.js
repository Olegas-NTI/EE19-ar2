"use strict";
// Global function
/* 
function calcAge(birthYear) {
    const age = 2021 - birthYear;
    function printAge() {
        const firstname = "Mikael";
        const output = `${firstname}, you are ${age} years old and born in ${birthYear}`;
        console.log(output);
    }
    if (birthYear >= 1981 && birthYear <= 1996) {
        const str = `Oh, you're a millenial, ${firstname}`;
    }
    // console.log(str); gives error because const and let are block scoped whereas if we put var it will ignore it and use the latest function scope instead
    printAge();
    return age;
}

const firstname = "Olegas";
calcAge(1981); 
*/
// Hoisting var vs let vs const
/* 
console.log(me);
console.log(job);
console.log(birthYear);

var me = "Olegas"
let job = "Developer"
const year = 2003
*/

/* 
console.log(addDecl(2+3));
console.log(addExpr(2+3));
console.log(addArr(2+3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

const addArr = () => {
    return a + b;
}; 
*/
/* 
// numProducts = 0 
if (!numProducts) deleteShoppingCart();
// efter deleteShoppingCart har blivit executad så skapas variabel numproducts med value 10
var numProducts = 10; 
console.log(numProducts);
function deleteShoppingCart() {
    console.log("All products deleted!");
}
*/

/* 
var x = 1
let y = 1
const z = 1

console.log(x === window.x); // adds property to window object  
console.log(x === window.y);
console.log(x === window.z); 
*/

// .this key word
/* 
const calcAge = function (birthYear) {
    console.log(2021 - birthYear);
    console.log(this); // Takes this of current function which basically is undefined because it has no object in it
};

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2021 - birthYear);
    // lexical this = uses this of parents scope which is global scope and global scope is pointed to window object
    console.log(this);
};
calcAgeArrow(1991); 
*/

/* var firstName = "Olegas from global scope"
const olegas = {
    firstName: "Olegas",
    year: 2003,
    calcAge: function () {
        console.log(`----Calc Age says:----`);
        console.log(this); // .this points at object where the function was called
        
        // Irregular function call has .this keyword set to undefined
        console.log(2021 - this.year);
        const isMilenial = function () {
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMilenial() 
    },
    greet: () =>{
        console.log(this);
        // Arrow functions take object owner of their parents which is global scope window, therefore if you make var variable that stores in window as u know, you will be able to acess it
        console.log(`Hey ${this.firstName}`) // before variable creation
    } 
};
olegas.calcAge();

const maram = {
    year: 1997
};

maram.calcAge = olegas.calcAge; // copy paste calcAge in maram object
// it works in the way it should and takes .this method of its own object owner
maram.calcAge(); 

olegas.greet(); // gives Hey undefined (see line 96)
*/
// !!! Conclusion 
// NEVER USE ARROW FUNCTION IN A METHOD

/* 
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 1, 12);
var addArrow = (a, b) => {
    console.log(arguments); // Doesnt work in arrow functions
    return a + b;
}

addArrow(2, 5) 
*/


// Primitives and objects!
/* 
let age = 30; // Age is 30
let oldAge = age; // Old age is the value of age which is 30

age = 31; // age becomes 31 but it doesnt change oldAge because the delcaration was written before the age was assigned to 31
console.log(age, oldAge);

const me = {
    name: 'Olegas',
    age: 30
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me); 
*/
// Primitive types in call stack
let lastName = 'Olegas';
let oldLastName = lastName;
lastName = 'Fernando';
console.log(lastName, oldLastName);
// Reference types (in call stack to heap)
const maram = {
    firstname: 'Maram',
    lastname: 'Ellis',
    age: 24
}

const marriedMaram = maram; // reference to the same object
marriedMaram.lastname = 'Demirjian'

console.log('Before marriage', maram);
console.log('After marriage', marriedMaram);

// gives error because you try to change value of constant which points to heap 
// marriedJessica = {};

// Coppying objects
const maram2 = {
    firstname: 'Maram',
    lastname: 'Ellis',
    age: 24,
    family: ['Alice', 'Bob']
}

const copiedObjectMaram = Object.assign({}, maram2)
copiedObjectMaram.lastname = 'Demirjian'
console.log('Before marriage', maram2);
console.log('After marriage', copiedObjectMaram);


copiedObjectMaram.family.push('Mary')
copiedObjectMaram.family.push('Fsfs')
console.log('Before marriage', maram2);
console.log('After marriage', copiedObjectMaram);
