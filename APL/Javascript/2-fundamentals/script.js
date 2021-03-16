'use strict';
/* 
// make function
function logger() {
    console.log("My name is Olegas");
}
// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice // Try without
}

const appleJuice = fruitProcessor(10, 1)
console.log(appleJuice);
const orangeJuice = fruitProcessor(1, 15)
console.log(orangeJuice);
const textToNumber = Number('25') + 25
console.log(textToNumber); 
*/

// Function declaration 
/* 
const age1 = calcAge1(2003);
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear
}
const age2 = calcAge2(2003)
console.log(age1, age2);

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(2003)); 
*/

/* 
function cutFruitPieces(fruit) {
return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`
    return juice
}

console.log(fruitProcessor(2, 4)); 
*/

/* const calcAge = function(year) {
    return 2021 - year;
}

const yearsUntilRetirement = function birthYear(birthYear) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    } else if (retirement < 0){
        return `Person retired ${retirement * -1} years ago`;
    }
    
}

console.log(yearsUntilRetirement(2003));
console.log(yearsUntilRetirement(1009)); 
*/

// Summary!
/* 
Function delcaration - Function that can be used before it's declared
Function expression - Essentially a function vlaue stored in a variable
Arrow function - Great for a quick one line fucntions. Doens't have (no, this) keyword
*/




///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
// Solution
/* 
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins (score: ${avgDolphins}) won against Koalas (score: ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas (score: ${avgKoalas}) won against Dolphins (score: ${avgDolphins})`;
    } else {
        return `No winner! Sorry`
    }
}

console.log(checkWinner(avgDolphins, avgKoalas));
console.log(checkWinner(1000, 500)); 
*/

// Arrays
/* 
const friend1 = 'Olegas';
const friend2 = 'Mikael';
const friend3 = 'Isam';
const friend4 = 'Luciano';

const friends = ['Olegas', 'Mikael', 'Isam', 'Luciano']
console.log(friends);

friends[1] = "Mia"
console.log(friends);

const efternamn = 'Sevcenko'
const olegas = ['Olegas', efternamn, 2021 - 2003, 'developer', friends]
console.log(olegas);
console.log(olegas.length); 
*/
// Combining functions with arrays
/* 
function calcAge(birthYear) {
    return 2021 - birthYear;
}

const yearsArray = [1990, 1998, 2003, 2011, 2018, 2020];



 
for (let i=0; i < yearsArray.length; i++) {
    console.log(calcAge(yearsArray[i]));
} 
*/

// Array operations (methods)

// Add elements
/* 
const friends = ['Olegas', 'Mikael', 'Isam'];
console.log(friends);
friends.push('Luciano')
console.log(friends);
const newLength = friends.unshift('Mia')
console.log(friends);
console.log(`Length of a new array is ${newLength}`);
// Remove elements
const removedElement = friends.pop() // Removes last value of the array
console.log(friends);
console.log(`Element "${removedElement}" has been removed from array`); 
friends.shift() // removes first value of array
console.log(friends);
console.log(friends.indexOf('Olegas'));
console.log(friends.includes('Olegas'));
*/


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/
//Solution
/* 
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125, 555, 44]
const bill1 = bills[0]
const bill2 = bills[1]
const bill3 = bills[2]
const tip1 = calcTip(bills[0])
const tip2 = calcTip(bills[1])
const tip3 = calcTip(bills[2])
const tips = [tip1, tip2, tip3]
const total = [bill1 + tip1, bill2 + tip2, bill3 + tip3];
console.log(bills);
console.log(tips);
console.log(total); 
*/


//Objects
/* 
const olegas = {
    förnamn: 'Olegas',
    efternamn: 'Sevcenko',
    ålder: 2021-2003,
    jobb: 'Utvecklare',
    kompisar: ['Mikael', 'Isam', 'Luciano']
}

console.log(olegas);
//Dot notation
console.log(olegas.förnamn);
console.log(olegas.efternamn);
//Bracket notation
console.log(olegas['förnamn']);
console.log(olegas['efternamn']);
const nameKey = 'namn'
console.log(olegas['för' + nameKey]);
console.log(olegas['efter' + nameKey]);
const promptInput = prompt('Vad vill du veta om Olegas? Du har 5 val: förnamn, efternamn, ålder, jobb eller kompisar')
console.log(promptInput + ": " + olegas[promptInput])
console.log(promptInput + ": " + olegas.promptInput);
olegas.location = 'sweden';
olegas['twitter'] = '@webdevhusky'
console.log(`${olegas['förnamn']} har ${olegas['kompisar'].length} vänner, hans favorit vän är ${olegas['kompisar'][0]}`); 
*/

/* 
const kompisarLista = ['Mikael', 'Isam', 'Luciano']

const olegas = {
    förnamn: 'Olegas',
    efternamn: 'Sevcenko',
    år: 2003,
    harKörkort: false,
    jobb: 'Utvecklare',
    kompisar: kompisarLista,
   // this keyword
    calcAge: function () {
        this.ålder = 2021 - this.år;
        return this.ålder;
    },
    körkortCheck: function () {
        return `${this.förnamn} är ${this.ålder}-år gammal ${this.jobb}, och han ${this.harKörkort ? 'har' : 'har inte'} körkort.` 
    }
}
console.log(olegas.calcAge());
console.log(olegas.körkortCheck());
console.log(olegas.ålder);
console.log(olegas.körkort);
console.log(olegas); 
*/
/* console.log(olegas['calcAge'](år)); */
// console.log(`${olegas.förnamn} är ${olegas.ålder}-år gammal ${olegas.jobb}, och han ${olegas.harKörkort}`);


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/
/* const mark = {
    namn: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const john = {
    namn: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}


mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.namn}'s BMI (${mark.bmi}) is higher than ${john.namn}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.namn}'s BMI (${john.bmi}) is higher than ${mark.namn}'s (${mark.bmi})!`);
} */


// Loops
/*  
3 statements
first declares variable, runs once
second declares a staement that runs the code until the statement is false
third runs everytime the code is excecuted, usually used as counter
*/
/* 
for (let rep = 0; rep <= 10; rep++) {
    console.log(`Den koden kördes ${rep} gånger`);
}  
*/

/* 
const profile = [
    'Olegas',
    20,
    'Webbutvecklare',
    ['Luciano', 'Isam', 'Mikael'],
    true
];

const types = [];


for (let i = 0; i < profile.length; i++) {
    console.log(profile[i]);
    types[i] = typeof profile[i];
}
let years = [2003, 1999, 1995, 2007];
let ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2020 - years[i]); 
}
console.log(ages);

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < profile.length; i++) {
    if (typeof profile[i] !== 'string') continue;    
    console.log(profile[i], typeof profile[i]);
}
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < profile.length; i++) {
    if (typeof profile[i] === 'number') continue;    
    console.log(profile[i], typeof profile[i]);
} 
*/
/* 
const profile = [
    'Olegas',
    20,
    'Webbutvecklare',
    ['Luciano', 'Isam', 'Mikael'],
    true
];

for (let i = profile.length-1; i > 0; i--) {
    console.log(profile[i]);
}
// loop inside loop
for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`------- Starting excercise ${excercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${excercise} Lifting weight repedition ${rep}`);
    }
} 
*/
/*
console.log("------- FOR LOOP");
for (let counter = 20; counter <= 50; counter++) {
    console.log(counter);

}
console.log("------- WHILE LOOP");
let counter = 20;
//exectued while 20 less than 50
while (counter <= 50) {
    console.log(counter);
    counter++;
}
*/


/* let dice = Math.trunc(Math.random() * 6) + 1;   
while (dice !== 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
} */

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []
const totals = []

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i])

}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum / arr.length;
}

console.log("Bills", bills);
console.log("Tips", tips);
console.log("Totals", totals);
console.log(calcAverage("Average of totals is", totals));
console.log(calcAverage("Average of tips is", tips));