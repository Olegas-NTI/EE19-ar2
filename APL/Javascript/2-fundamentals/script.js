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

const kompisarLista = ['Mikael', 'Isam', 'Luciano']

const olegas = {
    förnamn: 'Olegas',
    efternamn: 'Sevcenko',
    år: 2003,
    harKörkort: false,
    jobb: 'Utvecklare',
    kompisar: kompisarLista,
/*     
    calcAge: function (år) {
    return 2021 - år
    } 
    */
   // this keyword
    calcAge: function () {
        this.ålder = 2021 - this.år;
        return this.ålder;
    },
    körkortCheck: function () {
        if (this.harKörkort) {
            this.harKörkort = "har körkort"
            return this.körkort
        } else {
            this.harKörkort = "har inte körkort"
            return this.harKörkort
        }
    }
}
console.log(olegas.calcAge());
console.log(olegas.körkortCheck());
console.log(olegas.ålder);
console.log(olegas.körkort);
console.log(olegas);
/* console.log(olegas['calcAge'](år)); */

console.log(`${olegas.förnamn} är ${olegas.ålder}-år gammal ${olegas.jobb}, och han ${olegas.harKörkort}`);