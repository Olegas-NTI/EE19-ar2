// Select item
const item = document.querySelector(".item")
const placeholders = document.querySelectorAll(".placeholder")
const headers = document.querySelectorAll(".col-header")
console.log(item);
console.log(placeholders);
console.log(headers);
const dragstart = function (e) {
    console.log("Dragging started");
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'), 0)
    
}

const dragend = function (e) {
    console.log("Dragging ended");
    e.target.classList.remove('hold', 'hide')
    // e.target.className('item') option 2
}

const dragover = function (e) {
    e.preventDefault()
    console.log('Drag over!');
}
const dragenter = function (e) {
    console.log('Drag enter');
    e.target.classList.add("hoverer")
}
const dragleave = function (e) {
    console.log('Drag leave');
    e.target.classList.remove("hoverer")
}
const dragdr = function (e) {
    console.log('Drag drop');
    e.target.classList.remove("hoverer")
    e.target.append(item)
}


for (placeholder of placeholders) {
    placeholder.addEventListener("dragover", dragover)
    placeholder.addEventListener("dragenter", dragenter)
    placeholder.addEventListener("dragleave", dragleave)
    placeholder.addEventListener("drop", dragdr)
}

item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

setInterval(() => {
    const randomNumber = Math.round(Math.random() * 4) 
    console.log(randomNumber);
    headers[randomNumber].className = "col-header draghere"
    headers[randomNumber].textContent = "Here!"
    setTimeout(() => {
        headers[randomNumber].className = "col-header dark"
        headers[randomNumber].textContent = "X"
    }, 4500);
}, 5000);