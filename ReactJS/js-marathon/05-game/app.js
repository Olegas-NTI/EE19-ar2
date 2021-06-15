const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timer = document.querySelector('#time')
const board = document.querySelector('#board')
const screenOne = screens[0]
const screenTwo = screens[1]
const screenThree = screens[2]
const softColorArr = 
[
    '#ef5777', '#f53b57', '#575fcf', '#3c40c6', '#4bcffa', '#0fbcf9', '#34e7e4', '#00d8d6', '#0be881', '#05c46b', '#ffc048', '#ffa801', '#ffdd59', '#ffd32a', '#ff5e57', '#ff3f34'
]

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screenOne.classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time= Number(event.target.getAttribute('data-time'));
        screenTwo.classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})



function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }


}

function setTime(value) {
    timer.textContent = `00:${value}`
}

function finishGame() {
    timer.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your score: <span class="primary">${score}<span><h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    const randomIndexChoice = Math.trunc(Math.random() * (softColorArr.length - 1))
    // IF you take a look at the array I made each 2 values are matching colors so lightRed, darkerRed, lightBlue, darkerBlue, the if statement bellow can check so we don't land on darkerRed lighBlue gradient for example
    if ((randomIndexChoice + 1) % 2 === 0) {
        // The number is divisible then it means that we landed on the last shade of color palette, so the next value is another calue and it wont match the gradient 
        circle.style.background = `linear-gradient(90deg, ${softColorArr[randomIndexChoice - 1]} 0%, ${softColorArr[randomIndexChoice]} 100%)`
    } else {
        // Perfect scenario, this is when we get numbers that aren't divisbles it means it starts with a first shade of color second one will be the matching one
        circle.style.background = `linear-gradient(90deg, ${softColorArr[randomIndexChoice]} 0%, ${softColorArr[randomIndexChoice + 1]} 100%)`
    }
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}