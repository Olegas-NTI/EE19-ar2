'use strict';

/* 
const bookingsArr = [];
const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers = numPassengers || 1
    // price = price || 199
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookingsArr.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2, 800);
*/
/*
 const flight = 'LH234'
const olegas = {
    name: 'Olegas Sevcenko',
    passport: 23493058203
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999'
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 23493058203) {
        alert('Check in!')
    } else {
        alert('Wrong passport.')
    }
}
checkIn(flight, olegas)
console.log(flight);
console.log(olegas);


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(olegas)
checkIn(flight, olegas)
 */
/* 
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

// Higher order function
const transformer = function (str, fn) {
    console.log(`Original string ${str}`);
    console.log(`Transformed string ${fn(str)}`);
    console.log(`Transformation method: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord)

const calculate = function (value1, value2, operation) {
    console.log(`Method: ${operation.name}\n${operation(value1,value2)}`);
}

const addition = function (value1, value2) {
    return value1 + value2
}
const subtraction = function (value1, value2) {
    return value1 - value2
}

calculate(2, 5, addition)
calculate(2, 5, subtraction) */


/*
// Closures
 const greet = function name(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}!`);
    }
}

const greeterHey = greet('Hey!')
greeterHey('Olegas')
greet('Hello')('Maram')


// Challenge
const greetArrow = (greeting) =>{
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}
// Teacher's method
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hiiii!')('Olegas')
greetArr('Hey!')('Olegas')
*/

// Call Apply and Bind Methods 
/* 
const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    book: function (flightNum, name) {
        console.log(`${name} booked a seat on ${this.lufthansa} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

lufthansa.book(239, 'Jonas Schmedtmann')
lufthansa.book(635, 'John Smith')
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    
}
const book = lufthansa.book;

// Does not work
// book(23, 'Maram Al Sth')

// Call Method
book.call(eurowings, 223, 'Maram Al Sth')
book.call(lufthansa, 239, 'Olegas Sevcenko')

const swiss = {
    airline: `Swiss Air Lines`,
    iataCode: `LX`,
    bookings: []
}

book.call(swiss, 530, 'Tommy Shelby')

// Apply Method (not used in modern js)
const flightData = [583, 'George Georgerian']
book.apply(swiss, flightData)
// We use call method instead, if we want to use array as in apply method, we can use spread operator ... in order to pass in data
book.call(swiss, ...flightData)

// Bind method

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)
// Partial application available in bind method
const bookEW23 = book.bind(eurowings, 23)
bookEW(23, 'Steven Imaginary')
bookEW23('Olegas Kapchenko')

console.log(lufthansa);
console.log(eurowings);
console.log(swiss);

// With Event Listeners 
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// Partial appplication
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23)
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
// Challenge, make a closure that would do same as bind function
const addNEWTAX = function (rate) {
    return function (value) {
        console.log(value + value * rate);
    }
}

addNEWTAX(0.23)(100)
const addNEWVAT = addNEWTAX(0.23)
addNEWVAT(100)
*/

// IIFE
/* (function(symbol) {
    console.log('Regular function>\nThis will never be runned again' + symbol);
})('!');

(() => console.log('Arrow func>\nThis will never run again'))(); 
*/

// Closures 
/* 
const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking(); 
*/

// Example 1
/* 
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};
g();
f();
console.dir(f)

// h gets called and it reassigns f variable to another function that grabs b and multiplies it with 2
h();
f();
console.dir(f)

// Example 2
const boardPassenger = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function(){
        console.log(`WE are now boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)
    console.log(`Will start boarding in ${wait} seconds`)   
}
// Closure have priority over scope chain

const perGroup = 1000;
boardPassenger() 
*/