'use strict';


/* 
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
*/

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

// Optional chaining
// Instead of this
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
// Looping arrays
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
*/
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
// 1
const [players1, players2] = game.players

// 2
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers);
// 3
const allPlayers = [...players1, ...players2]
console.log("--------------------");
// 4
const subsitutePlayers = ['Thiago', 'Coutinho', 'Perisic']
const players1Final = [...players1, ...subsitutePlayers]
// 5
const {team1, x:draw, team2} = game.odds
console.log(team1, draw, team2);
// 6
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
};
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels')
// 7
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
 */
// Logical OP's
// Use ANY data type, return ANY data type, short-circuiting
/*
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