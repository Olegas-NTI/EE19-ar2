'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

const account5 = {
  owner: 'Olegas Sevcenko',
  movements: [1500, 1000, 700, -50, 9000],
  interestRate: 1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
     <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, movement) => acc += movement, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {

  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr);
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr);
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter(int => int >= 1)
    .reduce((acc, interest) => acc + interest);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumIn.textContent = `${incomes}€`;
  labelSumInterest.textContent = `${interest}€`;
};


const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner.toLowerCase().split(' ').map((name) => {
      return name[0];
    }).join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Dispaly summary
  calcDisplaySummary(acc);
};

let currentAccount;
// Event handler
btnLogin.addEventListener('click', (e) => {
  // prevents form from submitting
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and a welcome message
    labelWelcome.textContent = `Welcome back! ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
    console.log(`Sucessfully logged in as ${currentAccount.owner}`);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    // Find position in the accounts array what object in the array to delete
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // Deletes the account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false
btnSort.addEventListener('click', (e) => {
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* 
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log('------ SLICE ------');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
// Can make shallow copies
console.log(arr.slice());
console.log([...arr]);

// SPLICE (extracts extracted elements by mutating the array)
console.log('------ SPLICE ------');
// console.log(arr.splice(2))
arr.splice(-1);
console.log(arr);

// REVERSE
console.log('------ REVERSE ------');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse())
// MUTATES THE ARRAY
console.log(arr2)

// CONCAT (doesnt MUTATE)
console.log('------ CONCAT ------');
const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr, ...arr2])

// JOIN 
console.log(letters.join(' - '));
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*


// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`${i}: You withdrew ${Math.abs(movement)}`);
  }
}
console.warn('----- forEach -----');
movements.forEach((movement, i) => {
  if (movement > 0) {
    console.log(`${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
})
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// 3: function(3000)
// ...
*/

/*
 // Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach((value, key, map) => {
  console.log(`${key} is ${value}`);
})

// Set (removes if value repeats)
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value} is ${value}`);
})
// _ is throw away variable
*/

/*
 // Map method (creates a new array with returned values)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD);

const movementsDescription = movements.map((movement, i) =>
`${i + 1}: You ${movement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(movement)}`
);
console.log(movementsDescription);
 */

/*
// Filter method!!!
// Returns boolean value that receives true from the statement u state, therefore creating an array of the value that passed by.
const deposits = movements.filter(mov => mov > 0)
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals);
*/

/*
// Reduce method!
console.log(movements);
// accumulator -> snowball (storage)
const balance = movements.reduce((acc, current, i, arr) => {
  console.log(`Iteration ${i + 1} Container ${acc} received ${current}`);
  return acc += current
}, 0)
console.log(balance);
// Maximum Value
const findMaxOfArray = function (array) {
  const max = array.reduce((acc, mov) => {
    if (acc > mov) {
      return acc
    } else {
      return mov;
    }
  }, movements[0])
  return max
}
console.log(findMaxOfArray(movements));
*/
/*
// CHAINING ARRAY METHODS
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, curr) => acc + curr, 0);
console.log(totalDepositsUsd);
*/
/*
// Find method
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log('Find method',account);

for (let account of accounts) {
  if (account.owner === 'Jessica Davis') {
    console.log(`For loop method`, account);
  };
}
*/


/* 
// some and every methods
// EQUALITTY Includes
console.log(movements.includes[-130]);

// CONDITION Some
console.log(movements.some(mov => mov === -130)) // same as includes

const anyDeposits = movements.some(mov => mov > 15000);
console.log(anyDeposits);

// CONDITION EVERY
// Returns true only if all values in the array satisfy the condition
console.log(movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0
console.log(`---- SOME METHOD ----`);
console.log(movements.some(deposit));
console.log(`---- EVERY METHOD ----`);
console.log(movements.every(deposit));
console.log(`---- FILTER METHOD ----`);
console.log(movements.filter(deposit)); 
*/

/* 
// flat and flatMap methods
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2, 3]], [4,[5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements)
const allMovements = accountMovements.flat()
const bankNetWorth = allMovements.reduce((acc, curr) => acc + curr, 0)
console.log(bankNetWorth);


// Flat
const chainedBankNetWorth = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
console.log(chainedBankNetWorth);
// Flat Map
const flatMapedBankNetWorth = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
console.log(flatMapedBankNetWorth);
*/

/* 
// SORT METHOD!
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
// Sorts values from a-z it does mutate the array too
const sortedOwners = owners.sort();
// Array does get mutaded even though we save it in a variable, so calling it will change the array forever unless you somehow mutate it back to the original version of it later and not touching the saved variable
console.log(owners);
console.log(sortedOwners);


// Numbers
console.log(movements);
// return < 0, a, b (keep order)
// return > 0, b, a (switch order)

// Ascending order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
})
// Same thing
movements.sort((a, b) => a - b)

console.log(movements); 
*/

/* 
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7)
console.log(x);
// console.log(x.map(()=> 5));
// x.fill(1)
x.fill(1, 3, 5)
console.log(x);


arr.fill(23, 4, 6)
console.log(arr);

// Array.from
const y = Array.from({length: 7}, () => 1)
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1)
console.log(z);

const randomDiceRolls = Array.from({length: 100}, () => Math.trunc((Math.random() * 6) + 1))
console.log(randomDiceRolls);

// Node list to array with array.from



labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), (el) => Number(el.textContent.replace('€', '')))
  console.log(movementsUI);
  // const movementsUI2 = [...document.querySelectorAll('.movements__value')]
  // console.log(movementsUI2);
})
*/