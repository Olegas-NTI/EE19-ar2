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

// Comparison operators  > ; < ; >= ; <= ; == ; == ; !==
/* 
console.log(ageLuciano > ageOlegas); 
// true, koden säger det är sant att Lucianos age är större för att Luciano är 18 och Olegas är 17
console.log(ageLuciano < ageOlegas); 
// false, koden säger fel för att Lucianos age är inte mindre än Olegas's för att 17 är inte större än 18 
*/

// Challenge I
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/
// Solution
/* 
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 92;
const johnMass = 1.95;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;
const check = markBmi > johnBmi;

console.log(markBmi, johnBmi);
console.log("Is my mark's bmi higher than john's? : " + check); 
*/


// "" och ``
/* 
const förnamn = "Olegas";
const ålder = "18 år gammal"
const jobb = "webbutvecklare";

console.log("Hej jag heter " + förnamn + " och jag är " + ålder + " " + jobb + "!");
console.log(`Hej jag heter ${förnamn} och  jag är ${ålder} ${jobb}!`);  
*/

// Statements if
/* 
const ålder = 14;
const ärMyndig = ålder >= 18;

if (ärMyndig) {
    console.log(`Du är mynding och får ta körkort!`);
} else {
    console.log(`Du är inte 18 än, du har ${18 - ålder} år kvar att vänta.`);
}
*/

// Coding Challenge II
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/
// Solution
/* 
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 92;
const johnMass = 1.95;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})`);
} 
*/


// Type conversion
/* 
const inputYear = "2003";
console.log(Number(inputYear) + 7);
console.log(inputYear + 7);
*/

// Type coersion
// + adderar strings därför kan den inte veta om du menar att lägga ihop strings eller addera nummer, men med andra mattematiska symboler omvandlas string till nummer/integer
/* 
console.log("I am " + 23 + " years old");
console.log("10" - "3" - 2);
console.log("10" + "7" + 2);
console.log("10" > "5");
*/


// falsy values: 0, '', undefined, null, NaN
/* console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const money = 0;
if (money) {
    console.log("Stabilt!");
} else {
    console.log("Hitta ett jobb!");
}
*/

/* 
const height;
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is NOT defined");
}
*/


// Equality operators === och ==
/* 
const ålder = '18'
if (ålder === 18) {
    console.log("Värden är strikt lika (===)");
} else {
    console.log("Värden är inte lika med varandra enligt strict operator (===)");
}
if (ålder == 18) {
    console.log(`Ålder stämmer med varandra.\nString ("${ålder}") stoppar inte mig från att jämföra statements för att jag är loose operator`);
} else {
    console.log("Värden stämmer inte ALLS");
}
*/
