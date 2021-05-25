
const calcOutput = document.querySelector(".calc-output")
const buttons = document.querySelectorAll(".calc-btn")
const enter = document.querySelector(".enter")
let numberBoxEtt = "";
let numberBoxTvå = "";
let operation;
let nummerTvå;
let nummerEtt;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (!isNaN(buttons[i].value) && !operation) {
            numberBoxEtt = numberBoxEtt + buttons[i].value
            nummerEtt = Number(numberBoxEtt);
        } else if (isNaN(buttons[i].value)) {
            operation = buttons[i].value
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("click", function () {
                    if (!isNaN(buttons[i].value)) {
                        numberBoxTvå = numberBoxTvå + buttons[i].value
                        nummerTvå = Number(numberBoxTvå)
                    }
                })
            }
        } 
    })    
    
}

enter.addEventListener("click", function () {
    if (operation == "+") {
        calcOutput.value = nummerEtt + nummerTvå
        document.querySelector('.history-list').innerHTML = `<li>${nummerEtt} + ${nummerTvå} = ${calcOutput.value}</li>`
    } 
    if (operation == "-") {
        calcOutput.value = nummerEtt - nummerTvå
    }
    if (operation == "/") {
        calcOutput.value = nummerEtt / nummerTvå
    }
    if (operation == "*") {
        calcOutput.value = nummerEtt * nummerTvå
    }
   reset();

})

const reset = function () {
    numberBoxEtt = "";
    numberBoxTvå = "";
    operation;
    nummerTvå;
    nummerEtt;
}