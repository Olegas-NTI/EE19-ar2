
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
/* 
const checkDogs = function (dogsJulia, dogsKate) {
    const newArr = dogsJulia.slice(1, -2) 
    const dogsAges = newArr.concat(dogsKate)
    dogsAges.forEach((dogAge, i)=> {
        count = i+1
        dogAge >= 3 ? console.log(`Dog number ${count} is an adult, and is ${dogAge} years old`) : console.log(`Dog number ${count} is still a puppy 🐶`)
    })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]) 
*/


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/* 
const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(dogAge => dogAge <= 2 ? dogAge * 2 :  16 + dogAge * 4)
    console.log(humanAges);
    const filteredHumanAges = humanAges.filter(humanAge => humanAge >= 18)
    const average = filteredHumanAges.reduce((acc, current) => acc + current, 0) / filteredHumanAges.length
    return console.log(average)
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]) 
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
/* 
const calcAverageHumanAge = ages =>
    ages
        .map(dogAge => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4)
        .filter(humanAge => humanAge >= 18)
        .reduce((acc, current, i, arr) => acc + current / arr.length, 0);

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); 
*/



/////////////////////////////////////////////////
// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

///////////////////////////////////////
// Array Methods Practice
// 1. 
const bankDepositSum = accounts.flatMap((acc) => acc.movements).filter(acc => acc > 0).reduce((acc, curr) => acc + curr, 0);
console.log(bankDepositSum);

// 2. 
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

const numDeposits1000reduce = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

console.log(numDeposits1000reduce);


let a = 10
// Pre increment
console.log(++a);
// Post increment 
console.log(a++);

// 3. 
const {deposits, withdrawals} = accounts
.flatMap(acc => acc.movements)
.reduce((sums, curr) => {
    // curr > 0 ? sums.deposits += curr : sums.withdrawals += curr
    sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr
    return sums
}, {deposits: 0, withdrawals: 0});
console.log(deposits, withdrawals);

// Challenge 
const [arrDeposits, arrWithdrawals] = accounts.flatMap(acc => acc.movements).reduce((container, currentValue) => {
    container[currentValue > 0 ? 0 : 1] += currentValue
    return container
}, [0, 0])
console.log(arrDeposits, arrWithdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1)
    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']
    const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ')
    return capitalize(titleCase)
}
console.log(convertTitleCase('this is a nice title'))
console.log(convertTitleCase('this is a LONG title but not too long'))
console.log(convertTitleCase('and here is another title with an EXAMPLE')) 

///////////////////////////////////////
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];


// 1.
dogs.forEach((dogObject) => dogObject.recommendedFood = Math.trunc(dogObject.weight ** 0.75 * 28));
console.log(dogs);

// 2. 
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(dogSarah)

// 3.
// need curFood and recommended Food of each dog and store thme in a new array
const ownersEatTooMuch = dogs.filter((dog) => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners)
const ownersEatTooLittle = dogs.filter((dog) => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners)
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// 5. 
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
// console.log(dogs.some(dog => dog.curFood > (dog.recommendedFood * 0.9) && dog.curFood < (dog.recommendedFood * 1.1)));
const checkEatingOkay = dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8. 
const dogsCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood)
console.log(dogsCopy);