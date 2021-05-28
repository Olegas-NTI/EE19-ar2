// Selecting elements 
const btnFood = document.querySelector(".btn-food");
const btnCountries = document.querySelector(".btn-countries");
const btnAnime = document.querySelector(".btn-anime");
const codeElement = document.querySelector("code");
const inputElement = document.querySelector("input");
const arrayName = document.querySelector(".arrayName");

// Arrays
let foodArray = ['KFC Chicken', 'Babas Burgers', 'Kebab', 'Fattoush', 'Tabbouleh'];
let countriesArray = ['Sweden', 'Qatar', 'Kuwait', 'Netherlands'];
let animeArray = ['Naruto', 'Akame ga kill'];
let selected = "foodArray";

codeElement.textContent = foodArray;
arrayName.textContent = selected;

btnFood.addEventListener("click", () => {
    codeElement.innerHTML = foodArray;
    selected = "foodArray";
    arrayName.textContent = selected;

});
btnCountries.addEventListener("click", () => {
    codeElement.innerHTML = countriesArray;
    selected = "countriesArray";
    arrayName.textContent = selected;

});
btnAnime.addEventListener("click", () => {
    codeElement.innerHTML = animeArray;
    selected = "animeArray";
    arrayName.textContent = selected;

});

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if (inputElement.value == "") console.warn("Input är tom!");
        else {
            if (selected == "foodArray") {
                // Jag kunde ha använt push method men jag tyckte om denna sättet att lägga till arrayer :)
                foodArray = [...foodArray, inputElement.value];
                codeElement.textContent = foodArray;
            }
            else if (selected == "countriesArray") {
                countriesArray = [...countriesArray, inputElement.value];
                codeElement.textContent = countriesArray;
            }
            else if (selected == "animeArray") {
                animeArray = [...animeArray, inputElement.value];
                codeElement.textContent = animeArray;
            }
            inputElement.value = "";
        }
    }
});