document.addEventListener('DOMContentLoaded', () => {

    let prevBtn = [...document.querySelectorAll("svg.slider-control.slide-prev")];
    let nextBtn = [...document.querySelectorAll("svg.slider-control.slide-next")];
    let allSlides = [...document.querySelectorAll("div.slider-single")];
    let currentSlide = 0;
    let numberOfSlides = allSlides.length;


nextBtn.forEach(singleBtn => {
    singleBtn.addEventListener('click', () => {
        if ((currentSlide === numberOfSlides - 1) == true) {
            singleBtn.firstElementChild.classList = "next-fill-disabled";
            prevBtn[currentSlide].firstElementChild.classList = "prev-fill-active";
            return;
        } else {
            currentSlide++;
        }

        
        allSlides[currentSlide].classList.add("active");
        allSlides[currentSlide - 1].classList.remove("active");
        allSlides[currentSlide - 1].classList.add("disabled");
    })
})

    prevBtn.forEach(singleBtn => {
        singleBtn.addEventListener('click', () => {
            if (currentSlide === 0) {
                return;
            }
            currentSlide--;
            
            if (currentSlide > 0) {
                singleBtn.firstElementChild.classList = "prev-fill-active";
                console.log()
            }

            allSlides[currentSlide].classList.add("active");
            allSlides[currentSlide + 1].classList.remove("active");
            allSlides[currentSlide + 1].classList.add("disabled");
            
            console.log(currentSlide);
        })
    })

    


})