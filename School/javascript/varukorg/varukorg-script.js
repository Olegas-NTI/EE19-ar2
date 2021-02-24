/* 
const inputElement = document.querySelector("input")
const checkoutElement = document.querySelector(".checkout")
 
 
function addValue() {
    inputElement.value++
    checkoutElement.innerHTML = Number(inputElement.value) * 50
}

function removeValue() {
    inputElement.value--
    checkoutElement.innerHTML = Number(inputElement.value) * 50
}
*/

// Väljer elementen som vi behöver
const rutaPris = document.querySelector(".pris");
const rutaAntal = document.querySelector("input");
const rutaSumma = document.querySelector(".checkout");

// Globala variabler
var antal = rutaAntal.value;
console.log("antal", antal);
var pris = rutaPris.textContent;
console.log("pris", pris);

// Räkna ut summan
var summa = antal * pris;
console.log("summa", summa);

// Skriv ut summan
rutaSumma.textContent = summa;

// Lyssna på ändring i input-rutan
rutaAntal.addEventListener("input", function() {
    // Läs av nya antalet
    antal = rutaAntal.value;

    // Räkna ut nya summan
    summa = antal * pris;

    // Skriv ut nya summan
    rutaSumma.textContent = summa;
});