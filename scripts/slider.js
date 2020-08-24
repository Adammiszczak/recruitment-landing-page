document.addEventListener('DOMContentLoaded', () => {
    console.log('test')

    let prevBtn = document.querySelector("svg.slider-control.slide-prev");
    let nextBtn = document.querySelector("svg.slider-control.slide-next");
    let allSlides = [...document.querySelectorAll("div.slider-single")];
    let currentSlide = 0;
    let numberOfSlides = allSlides.length;

    let nextSlide = () => {
        currentSlide++;
        console.log(currentSlide)
        
        console.log(currentSlide === numberOfSlides - 1);
    }
    
    if ((currentSlide === numberOfSlides - 1) == true) {
        nextBtn.removeEventListener('click', nextSlide,true)
    } else {
        nextBtn.addEventListener('click', nextSlide)
    }



    prevBtn.addEventListener('click', () => {
        currentSlide--;
        console.log(currentSlide);
    })
    // console.log("prevBtn")

})