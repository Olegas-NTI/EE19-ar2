const knappElement = document.querySelector("button")
const fInputElement = document.querySelector(".tal1");
const sInputElement = document.querySelector(".tal2");
const plusOutput = document.querySelector(".plus")
const minusOutput = document.querySelector(".minus")
let fInput = fInputElement.value
let sInput = sInputElement.value



knappElement.addEventListener("click", function () {
    fInput = fInputElement.value

    sInput = sInputElement.value

    plusOutput.value = Number(fInput) + Number(sInput)
    minusOutput.value = fInput - sInput
})