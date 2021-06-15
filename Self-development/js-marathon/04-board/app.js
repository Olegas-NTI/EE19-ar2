const board = document.querySelector('#board')
const buttons = document.querySelectorAll('button')
const SQUARES_NUMBER = 500;
let counter = -1;
let arrOfColor = ['#7efff5', '#67e6dc', '#17c0eb', '#18dcff', '#7158e2', '#7d5fff']

for (button of buttons) {
    buttons[0].addEventListener('click', () => {
        buttons[1].classList.remove('active')
        buttons[2].classList.remove('active')
        arrOfColor = ['#82ccdd', '#60a3bc', '#3c6382', '#0a3d62']
        buttons[0].classList.add('active')
    })
    buttons[1].addEventListener('click', () => {
        buttons[0].classList.remove('active')
        buttons[2].classList.remove('active')
        arrOfColor = ['#f8c291', '#e55039', '#eb2f06', '#b71540']
        buttons[1].classList.add('active')
    })    
    buttons[2].addEventListener('click', () => {
        buttons[0].classList.remove('active')
        buttons[1].classList.remove('active')
        arrOfColor = ['#b8e994', '#78e08f', '#38ada9', '#079992']
        buttons[2].classList.add('active')
    })    
}


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => 
        setColor(square)
    )
    square.addEventListener('mouseleave', () => 
        removeColor(square)
    )
    board.append(square)
}

function setColor(e) {
    const color = getColor()
    e.style.backgroundColor = color   
    e.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`
}
function removeColor(e) {
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #1d1d1d`
}
function getColor() {
    if (counter == arrOfColor.length - 1) counter = -1
    counter++;
    return arrOfColor[counter]
}
