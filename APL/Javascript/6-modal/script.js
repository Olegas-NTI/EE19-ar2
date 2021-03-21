const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// querySelectorAll goes through the whole code and as soon as it gets all elements with same class it prints it out in node list, which can be manipulated in the same way as array
// So if we use for loop of a querySelectorAll node list it will print out all the elements that we can manipulate
console.log(btnsOpenModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // classlist.add/remove = lets your add or remove classes to elements
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
    console.log(btnsOpenModal[i]);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);    


document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        console.log("You pressed escape to close modal! 😃");
        closeModal();
    }
})

