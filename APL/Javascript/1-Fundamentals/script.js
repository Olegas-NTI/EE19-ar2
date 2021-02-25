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

/* 
const favorit = Number(prompt("Vad är ditt favorit nummer?"));
console.log(favorit);
console.log(typeof favorit);

if (favorit === 16) {
    console.log("Va kul! 16 är också min favorit nummer");
} else if(favorit === 14) {
    console.log(`Jag gillar 14 också!`);
} else {
    console.log(`Bra att du gillar nummer ${favorit}, jag personligen tycker om nummer 16 eller 14!`);
} 

if (favorit !== 16) console.log("Men varför inte 16?");
*/

//Booleans! && - and, 

/* 
const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const isTired = true;
const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if (shouldDrive) {
    console.log("You can drive!");
} else {
    console.log("Someone else should drive!");
} 
*/



////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/
// Solution
/* 
const DolphinAverage = (97 + 112 + 101) / 3
const KoalasAverage = (109 + 95 + 106) / 3


if (DolphinAverage < 100) {
    console.log("Dolphins can't contest because their average is lower than 100");
}
if (KoalasAverage < 100) {
    console.log("Koalas can't contest because their average is lower than 100");
}

if (DolphinAverage > KoalasAverage) {
    console.log("Dolphins average is higher than Koalas");
} else if (KoalasAverage > DolphinAverage) {
    console.log("Koalas average is higher than Dolphins");
} else if (KoalasAverage === DolphinAverage) {
    console.log("Draw! No winner, sowwy");
}
 */



 // Switch statement *strict ===*

/*  
const day = "sunday"

 switch(day) {
    case 'monday':
        console.log("It's monday!");
        break;
    case 'tuesday':
        console.log("It's tuesday!");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("It's wednesday or thursday!");
        break;
    case 'friday':
        console.log("It's friday!");
        break;
    case 'satuday':
    case 'sunday':
        console.log("Yay! Weekends!");
        break;
    default:
        console.log("I'm not sure why but I can't understand your day of the week");
}

if (day === 'monday') {
    console.log("It's monday!");
} else if (day === 'tuesday') {
    console.log("It's tuesday!");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("It's wednesday or thursday!");
} else if (day === 'friday') {
    console.log("It's friday!");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("Yay! Weekends!");
} else {
    console.log("I'm not sure why but I can't understand your day of the week");
} 
*/


// Conditional Ternary Operator 
/* 
const age = 18;
age >= 18 ? console.log("Your age is or higher than 18!") : console.log("Age is NOT higher than 23"); 

const drink = age >= 18 ? 'Du får drycka alkohol' : 'Du får drycka vatten!'
console.log(drink); 
*/


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/
// Solution
/* 
const bill = 40;
const tip = bill >= 50 <= 300 ? bill * 15/100 : bill * 20/100
console.log(`The bill was $${bill} and the tip was $${tip}`); 
*/
