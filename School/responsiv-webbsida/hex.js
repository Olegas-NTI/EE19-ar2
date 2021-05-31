const hexInput = document.querySelector(".hex-input");
const hexCanvas = document.querySelector(".hex-canvas");
const errorMessage = document.querySelector(".error-message");
hexInput.addEventListener("input", function () {
    if (hexInput.value.includes("#")) {
        console.error("Ta bort hashtag'en!");
        errorMessage.textContent = "Ta bort hashtag'en!";
    } else if (hexInput.value.length >= 3 && hexInput.value.includes("#") == false) {
        errorMessage.textContent = "";
        hexCanvas.style.backgroundColor = "#" + hexInput.value;
    }
});