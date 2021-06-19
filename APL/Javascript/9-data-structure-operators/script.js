'use strict';



const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    }
};


// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({ starterIndex = 0, mainIndex = 0, address, time = "most likely at night" }) {
        console.log(`Order received!\n${this.starterMenu[starterIndex]} with ${this.mainMenu[mainIndex]} will be delivered to: ${address} ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`${ing1}${ing2}${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};
///////////
// Maps (fundamentals)
//
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open 🤗')
    .set(false, 'We are closed! 😪');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
console.log(rest.delete(2));
// console.log(rest.clear);

const arr = [1, 2];
rest.set(arr, 'test if it works');
rest.set(document.querySelector('h1'), 'Heading of webpage');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

///////////
// Maps (Iteration)
//
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct! 🎉'],
    [false, 'Wrong! ❌']
]); */
// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);
// console.log(question.get('question'));
// for (const [key, value] of question)
//     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// const answer = Number(prompt('Your answer?'));
// const correctAnswer = question.get('correct');

// Gets value out of comparing which is boolean value true or false and inserts it in the question so its either way true or false and returns the value depending on what key we got.
// console.log(question.get(answer === correctAnswer));

// Convert map to array
// console.log(...question);
// console.log(question);
///////////
// Sets
//
/* const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Rizotto',
    'Pasta',
    'Pizza'
]);
console.log(orderSet);
console.log(new Set('Olegas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Garlic Bread'));
orderSet.add('Garlic Bread')
orderSet.add('Garlic Bread')
orderSet.delete('Rizotto')
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter', 'Waiter', 'Student']
const typesWorking = [...new Set(staff)]
console.log(...typesWorking, typesWorking.length );
*/
/*
// Property NAMES!
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days:`

for (const day of Object.keys(openingHours)) {
    openStr += ` ${day},`
}
console.log(openStr);

// Propery Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object!
const entries = Object.entries(openingHours)
 console.log(entries);
 console.log(entries[0]);

for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/


// Optional chaining
// Instead of this
/*
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// Use optional chaining (?)
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.thu?.open);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays) {
    const openTime = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On day ${day} we open at ${openTime}`);
}
// Option chainin with methods
console.log(restaurant.order?.(0, 1) ?? "Dont know this method");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Dont know this method");

// Arrays
const users = [
    { name: '', email: 'olegas.sevcenko@gmail.com' }
];
console.log(users[0]?.name || 'No name provided in the object');
*/
// Looping arrays
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
*/

/*
// Logical OP's
// Use ANY data type, return ANY data type, short-circuiting
console.log("---- OR -----");
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(false || '' || !3 || 'hi' || 2 || unedfined);

restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);
// ?? nullish: null and undefined (0 or '' aren't nullish)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


console.log("---- AND -----");
console.log(0 && 'Olegas');
console.log(7 && 'Olegas');
console.log('Hello' && 23 && null && 'ignored value');

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}
*/
/*
restaurant.orderDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2
});

restaurant.orderDelivery({
    address: 'Mossvägen',
    starterMenu: 2,
    mainmenu: 0
});
////////////////////////////////////////////////////////////////////////////////
// Object Destruction

// We take values out of object properties named
// name, openingHours, categories
// And store them into the variable, that are named the same way as property
const { name, openingHours, categories } = restaurant;
// Check values by logging variables we created up there
console.log(name, openingHours, categories);
// but u can change it by writing "propertyName : customVariableName" = object
const {
    name: RestaurantName,
    openingHours: weOpenAt,
    categories: tags
} = restaurant;
// Log it out
console.log(RestaurantName, weOpenAt, tags);

// DEFAULT VALUES
//(they work at the same way as arrays, just replaces if value cannot be found)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating values
let a = 999;
let b = 111;
const obj = { a: 23, b: 7, c: 14 };

// How to declare a b properties into variable?
// Mutation method
({ a, b } = obj); // Like this!
console.log(a, b);

// Nested objects
const { fri: { open: openinHours, close: closingHours } } = openingHours;
console.log(openingHours, closingHours);
*/


////////////////////////////////////////////////////////////////////////////
// Strings  
//
console.warn(`------ String methods ------`);
const airline = 'TAP Air Portugal'
const plane = 'A320'
console.log(plane[0]);
console.log("A320"[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf('') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
    const seatLine = seat.slice(-1)
    if (seatLine === "B" || seatLine === "E") {
        console.log("The seat is middle seat! 🤢");
    } else {
        console.warn("You didn't get the middle seat! 😏");
    }
}
checkMiddleSeat("11B")
checkMiddleSeat("23C")
checkMiddleSeat("3E")

// Capitalization 
console.warn(`------ Capitalization ------`);
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
function fixCapitalization(passengerName) {
    const passengerLower = passengerName.toLowerCase()
    const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
    return passengerCorrect
}
console.log(fixCapitalization('oLegAS'));

// Comparing emails
console.warn(`------ Comparing Emails ------`);
function checkEmail(email, inputedEmail) {
    const normalizedEmail = inputedEmail.toLowerCase().trim()
    if (normalizedEmail === email) {
        return console.log(`Converted "${inputedEmail}" to ${normalizedEmail}\n${normalizedEmail} === ${email}\nEmails are identical!`)
    } else {
        return console.error(`Converted "${inputedEmail}" to "${normalizedEmail}"\n${normalizedEmail} !== ${email}\nEmails are NOT identical!\n`)
    }   
}
checkEmail('olegas@student.io', 'olegas@student.io') // true
checkEmail('olegas@student.io', 'olegas@studen.io') // false

// Replacing
console.warn(`------ Replacing ------`);
const priceGB = '205,45$'
const priceUS = priceGB.replace('$', '€').replace(',', '.')
console.log(priceUS);

const annoucement = 'All passengers come to barding door 23. Boarding door 23.'
// console.log(annoucement.replaceAll('door', 'gate')); // new replaceAll
console.log(annoucement.replace(/door/g, 'gate')); // RegEx

// Booleans
console.warn(`------ Booleans ------`);
const newPlane ='Airbus A320neo'
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('Boeing'));
console.log(newPlane.includes('Airb'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
} 

// Pracise exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase()
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed to bring gun or a knife');
    } else {
        console.log('You are welcome here!');
    }
}
checkBaggage('I have a laptop, some food and a pocket knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')
/*
////////////////////////////////////////////////////////////////////////////
//  Arrays!

//  DESTRUCTING ARRAYS

const arr = [0, 3, 4]

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// instead use destructuring array method
const [x, y, z] = arr
console.log(x, y, z);
console.log(arr);

// Mutation
let [main, , secondary] = restaurant.categories

// Switching with variables (BAD WAY!)
// const temp = main;
// main = secondary;
// secondary = temp;

console.log(main, secondary); // Italian vegetarian

[main, secondary] = [secondary, main]
console.log(main, secondary); // Vegetarian Italian

const [starterChoice, mainChoice] = restaurant.order(2, 0);
console.log(starterChoice, mainChoice);

const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Defaul values
const [p=1, q=1, r=1] = [8]
console.log(p, q, r);
*/

// Spread operator!

/* const arr = [1, 2, 3]

const badNewArray = [arr[0],arr[1],arr[2], 4, 5, 6 ]
console.log(badNewArray);

// Much better way
const goodNewArray = [...arr, 4, 5, 6]
console.log(goodNewArray);
// U can also do this
console.log(...goodNewArray);
// U get each value from aray

const newMenu = [...restaurant.mainMenu, 'Kebab', ]
console.log(newMenu);

// Copy array
const mainMenu = [...restaurant.mainMenu]
//Join 2 arrays
const mainMenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log();

// Real world example
const ingredients  = [
    prompt("Let's make pasta! Ingrediten 1?"),
    prompt("Ingrediten 2?"),
    prompt("Ingrediten 3?")
]
restaurant.orderPasta(...ingredients)


// Object
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant}
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
*/


// Array REST

/*
 // 1. Destructuring
// SPREAD, because on the right side of = sign
const arr = [1, 2, ...[3, 4]];
// REST, because its on the left side of = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
// Each element stored in variable, a is 1 b is 2 and others will take rest of the unsaved values and place them in array variable called others
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood);

//Objects REST
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
    //rest arguments
};
add(2, 5);
add(2, 5, 1, 4, 3);

const x = [23, 5, 7];
add(...x)

restaurant.orderpizza('mushrooms', 'onion', 'olives', 'spinach')
*/



