
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
        const li = document.createElement('li');
        li.innerText = `${nummerEtt} + ${nummerTvå} = ${calcOutput.value}`
        document.querySelector(".history-list").appendChild(li);
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
    numberBoxEtt = "";
    numberBoxTvå = "";
    operation = undefined;
    nummerTvå = "";
    nummerEtt = "";
    calcOutput.value = ""
})

