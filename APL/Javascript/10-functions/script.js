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