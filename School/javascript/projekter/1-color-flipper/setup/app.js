// Hex tabell
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Väljer ut elementer
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
// Få nummer 1-15
const getRandomNumber = function () {
    return Math.trunc(Math.random() * hex.length);
};
// Click event
btn.addEventListener("click", function () {
    // Randomzie hex

    // SKapar sträng där bokstäver och nummer kommer fyllas i
    let completedColor = "";
    // Loop går igenom 6 gånger för att hex color läng är 6
    // Sen looper skapar variabel som innehåller siffra 1-15
    // Sen den skapar variabel som innehåller slumpmässigt vald siffra eller bokstav
    // Sen så lägger den till i en sträng
    // Loop forsätter så vidare 5 gånger till, tills den fyller i 6 siffriga hex
    for (let i = 0; i < 6; i++) {
        let randomizedNumber = getRandomNumber();
        let randomizedHex = hex[randomizedNumber];
        completedColor = completedColor + randomizedHex;
    }
    // Skriver ut på webbsidan
    document.querySelector("body").style.backgroundColor = "#" + completedColor;
    color.textContent = "#" + completedColor;
});

