// TYPE OF, visar typ av variabel
/*
let isItString = "Text = String";
let isItNumber = 10;
let isItBoolean = true;
let isItUndefined;
console.log(typeof isItString);
console.log(typeof isItNumber);
console.log(typeof isItBoolean);
console.log(typeof isItUndefined);
*/


// Diffference between reassigning and making a variable
/*  
let year = 2020 // creates variable
year = 2021; //reassignes variable value *wouldnt work with const*
*/

//Difference between var let and const
/* 
var is function scoped

let and const is block scoped

const is the variable with static value that doesnt change, and if it does we get a warning 

let is same as var but block scoped and also newer
*/

/* 
const now = 2020
const ageOlegas = now - 2003
const ageLuciano = now - 2002
console.log(ageOlegas, ageLuciano)
*/

// Assignment operators
/* 
let x = 10 + 5; // 15
console.log(x);
x += 10; // x = x + 10
x *= 2; // x = x * 2
x++; // x = x + 1
x--; // x = x + 1 
console.log(x); 
*/

// Comparison operators
// > ; < ; >= ; <= ; == ; == ; !==
console.log(ageLuciano > ageOlegas); // true, koden säger det är sant att Lucianos age är större för att Luciano är 18 och Olegas är 17
console.log(ageLuciano < ageOlegas); // false, koden säger fel för att Lucianos age är inte mindre än Olegas's för att 17 är inte större än 18