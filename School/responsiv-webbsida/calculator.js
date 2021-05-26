
const calcOutput = document.querySelector(".calc-output");
const buttons = document.querySelectorAll(".calc-btn");
const enter = document.querySelector(".enter");
let numberBoxEtt = "";
let numberBoxTvå = "";
let operation;
let nummerTvå;
let nummerEtt;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        calcOutput.value = ""
        if (!isNaN(buttons[i].value) && !operation) {
            numberBoxEtt = numberBoxEtt + buttons[i].value;
            nummerEtt = Number(numberBoxEtt);
        } else if (isNaN(buttons[i].value)) {
            operation = buttons[i].value;

        } else if (!isNaN(buttons[i].value)) {
            numberBoxTvå = numberBoxTvå + buttons[i].value;
            nummerTvå = Number(numberBoxTvå);
        }
        calcOutput.value = buttons[i].value;
    });
}


enter.addEventListener("click", function () {
    if (operation == "+") {
        calcOutput.value = nummerEtt + nummerTvå;
        const li = document.createElement('li');
        li.innerText = `${nummerEtt} + ${nummerTvå} = ${calcOutput.value}`;
        document.querySelector(".history-list").appendChild(li);
        reset()
    }
    if (operation == "-") {
        calcOutput.value = nummerEtt - nummerTvå;
        const li = document.createElement('li');
        li.innerText = `${nummerEtt} - ${nummerTvå} = ${calcOutput.value}`;
        document.querySelector(".history-list").appendChild(li);
        reset()
    }
    if (operation == "/") {
        calcOutput.value = nummerEtt / nummerTvå;
        const li = document.createElement('li');
        li.innerText = `${nummerEtt} / ${nummerTvå} = ${calcOutput.value}`;
        document.querySelector(".history-list").appendChild(li);
        reset()
    }
    if (operation == "*") {
        calcOutput.value = nummerEtt * nummerTvå;
        const li = document.createElement('li');
        li.innerText = `${nummerEtt} * ${nummerTvå} = ${calcOutput.value}`;
        document.querySelector(".history-list").appendChild(li);
        reset()
    }
});

const reset = function() {
    numberBoxEtt = "";
    numberBoxTvå = "";
    operation = "";
    nummerTvå = "";
    nummerEtt = "";    
} 
