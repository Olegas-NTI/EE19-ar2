/* 
    <main>
      <div class="container">
        <h1>counter</h1>
        <span id="value">0</span>
        <div class="button-container">
          <button class="btn increase">increase</button>
          <button class="btn reset">reset</button>
          <button class="btn decrease">decrease</button>
        </div>
      </div>
    </main>
*/
const counterElement = document.querySelector("#value");
const btnIncrease = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");
const btnDecrease = document.querySelector(".decrease");
const allButtons = document.querySelector(".btn");

let counter = 0;
counterElement.textContent = counter;

const checkIfZero = function () {
    if (counter === 0) {
        counterElement.style.color = "hsl(209, 61%, 16%)";
    }
}

btnIncrease.addEventListener("click", function () {
    counter++;
    counterElement.textContent = counter;
    if (counter > 0) {
        counterElement.style.color = "green";
    }
    checkIfZero();
});
btnDecrease.addEventListener("click", function () {
    counter--;
    counterElement.textContent = counter;
    if (counter < 0) {
        counterElement.style.color = "red";
    }
    checkIfZero();
});
btnReset.addEventListener("click", function () {
    counter = 0;
    counterElement.textContent = counter;
    counterElement.style.color = "hsl(209, 61%, 16%)    ";
});