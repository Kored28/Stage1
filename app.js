const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');



// section
window.onscroll = () => {
    sections.forEach(sec => {
        let id = sec.getAttribute('id');
    })

}


// For Nav 
const menuBar = document.querySelector('.icon-container')
const navMenu = document.querySelector('.nav-menu')

menuBar.addEventListener("click", function(){
    navMenu.classList.toggle('show')
})


//time
let time = document.getElementById('current-time')
let day = document.getElementById('current-day')

setInterval(() => {
    let d = new Date()
    time.innerHTML = d.toLocaleTimeString();
}, 1000)

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = new Date()
day.innerHTML = daysOfWeek[currentDay.getDay()]


