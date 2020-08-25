document.addEventListener('DOMContentLoaded', () => {


let navbarMain = document.querySelector("nav.main-navigation");
let hamburgerToggler = document.querySelector("div.main-navigation-hamburger");
let mobileList = document.querySelector("ul.main-navigation-links")

window.addEventListener('scroll', () => {
    if (window.scrollY !== 0 && window.innerWidth > 767) {
        navbarMain.className = "main-navigation-scrolled"
    } else {
        navbarMain.className = "main-navigation"
    }
})



hamburgerToggler.addEventListener('click', () => {
    if (mobileList.style.display === '' || mobileList.style.display === 'none')
    {
        mobileList.style.display = 'block'
    } else {
        mobileList.style.display = 'none'
    }
    
})


})