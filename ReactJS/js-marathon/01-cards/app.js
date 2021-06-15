// Query all html elements containing .slide class
const slides = document.querySelectorAll(".slide")

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
        if (slide == slides[0]) {
            document.body.classList.remove("giraffeBg")
            document.body.classList.remove("wolfBg")
            document.body.classList.remove("lizzardBg")
            document.body.classList.add('foxBg')
        }
        if (slide == slides[1]) {
            document.body.classList.remove("foxBg")
            document.body.classList.remove("wolfBg")
            document.body.classList.remove("lizzardBg")
            document.body.classList.add('giraffeBg')
        } 
        if (slide == slides[2]) {
            document.body.classList.remove("foxBg")
            document.body.classList.remove("giraffeBg")
            document.body.classList.remove("lizzardBg")
            document.body.classList.add('wolfBg')
        } 
        if (slide == slides[3]) {
            document.body.classList.remove("foxBg")
            document.body.classList.remove("giraffeBg")
            document.body.classList.remove("wolfBg")
            document.body.classList.add('lizzardBg')
        } 
    })
}

const clearActiveClasses = function () {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}
