'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-07-10T14:11:59.604Z',
    '2021-06-28T17:01:17.194Z',
    '2021-07-01T23:36:17.929Z',
    '2021-07-02T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date)
  }

};


const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;


  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
    <div class="movements__row">
     <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
     <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, movement) => acc += movement, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
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
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  labelSumOut.textContent = `${Math.abs(outcomes).toFixed(2)}€`;
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Dispaly summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;


btnLogin.addEventListener('click', (e) => {
  // prevents form from submitting
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and a welcome message
    labelWelcome.textContent = `Welcome back! ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    /*     
    // Manually create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`; 
    */
    // API
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      // weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
    };
    // const locale = navigator.language; // Receives language of clients browser https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language 
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);


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

    // Add trasnfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());


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
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1 3/10 = 3.333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);

// Conversion
console.log(Number('23'));
console.log(+'23');

console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('px30', 10));
console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

// Check if value is isNaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(20 / 0));
*/

/*
// Square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Math max
console.log(Math.max(5, 18, 23, 11, 2));

const arr = [2, 5, 3, [4, 56]]
console.log(Math.max(...arr.flat()));

// Pi number 3,14...
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.trunc(Math.random() * max) + min
const randomInt = (min, max) =>
Math.floor(
  Math.random() * (max - min) + 1) + min;
// 0...1...(max - min) -> min...max
// console.log(randomInt(1, 10));
 */

/*
// Rounding integers

// Trunc, always removes decimal part
// Example: 9.2 => 9; 9.9 => 9; 9.9999999 => 9
console.log(Math.trunc(23.3)); // 23

// Round, rounds in the regular school way etc if the decimal part is >= 5 it will round to the next number
console.log(Math.round(23.45)); // 23
console.log(Math.round(23.5)); // 24
console.log(Math.round(23.6)); // 24

// Ceil, rounds up, unless there is no decimal part
console.log(Math.ceil(23.45)); // 24
console.log(Math.ceil(23)); // 23
console.log(Math.ceil(23.6)); // 24

// Floor, opposite of ceil, rounds down unless there is no decimal part
console.log(Math.floor(23.6)); // 23
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(22.9)); // 22

// Floor and Trunc are simillar only to positive numbers
console.log(Math.trunc(-23.3)); // 23
console.log(Math.floor(-23.3)); // 24

// Rounding floats/decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.765).toFixed(2));
console.log(+(2.765).toFixed(2));
*/

/*
// Remainder
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3); // 8 = 3 * 2 + 2
console.log(8 % 3);
console.log(8 / 3); // 8 = 3 * 2 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', () => {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    // 0, 2 ,4, 6
    if (i % 2 === 0) row.style.backgroundColor = '#bdc3c7';
    // 0, 3, 6, 9 (every third line)
    if (i % 3 === 1) row.style.backgroundColor = '#ecf0f1'
    // 1, 3, 5, 7, 9
    // if (i % 2 === 1) row.style.backgroundColor = '#ecf0f1'
  })
})
*/

/*
// Numbers higher than 2^53 - 1
console.log(2 ** 53 - 1);
console.log(Math.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

console.log(2385555555555555555888484935895983n);
console.log(BigInt(23855555534));

// Operations
console.log(1000n + 1000n);
console.log(3572398293823882938858n * 100000023n);
// console.log(Math.sqrt(16n)); // Math. methods do not work



const huge = 203953995738837583938n
const num = 23

//console.log(huge * num); // Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num)); // fix

// Comparing
console.log(20n > 15);
// Compares types instead of values themselves, because of ===
console.log(20n === 20);
console.log(typeof 20n);
console.log(typeof 20);
console.log(20n == 20);
console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(10n / 3n); // Cuts off decimal part after division
console.log(10 / 3);
*/

/*
// Dates
// Create a date
const now = new Date();
console.log(now);
console.log(new Date('Wed Jun 30 2021 17:50:43 GMT+0200'));
console.log(new Date('October 31 2013'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/
/*
// Working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth() + 1); // month is 0 based
console.log(future.getDate());
console.log(future.getDay()); // 4 == thursday;
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.getTime()); // How much time has passed by

console.log(Date.now());

future.setFullYear(2040)
console.log(future);
*/
/* 
// Operations with dates 
const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future)); // converts timestamp in ms

const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);

// Intl
const date = new Date()
const objectOfOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
    }
const locale = navigator.langauge // receives browsers language 
console.log(new Intl.DateTimeFormat(locale//, objectOfOptions).format(date))

*/
