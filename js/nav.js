// Nav menu

const menuIcon = document.querySelector(".menu-icon")
const nav = document.querySelector("nav")
const fa = document.querySelector(".fa-solid")

menuIcon.addEventListener("click",function(){
    
    if(fa.classList[1] === "fa-bars") {
        nav.style.display = "block"
        fa.classList.remove("fa-bars")
        fa.classList.add("fa-xmark")}
        menuIcon.style.pointerEvents = "none"
})

nav.addEventListener("click",function(){
        nav.style.display = "none"
        fa.classList.add("fa-bars")
        fa.classList.remove("fa-xmark")
        menuIcon.style.pointerEvents = "all"
})


// Tooltip bootstrap

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
