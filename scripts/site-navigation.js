document.addEventListener('DOMContentLoaded', () => {
    let timer;
    let sitePosition = [...document.querySelectorAll(".site-position")];
    let sitePositionNav = [...document.querySelectorAll("div.site-navigation svg circle")];

    let elementsHeight = sitePosition.map(el => {
        return el.offsetTop;
    })

    window.addEventListener('scroll', (e) => {

        if(timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(function() {
            console.log(window.scrollY)
            for (let i = 0; i < sitePosition.length; i++) {
                if(window.scrollY > elementsHeight[i] && window.scrollY < elementsHeight[i+1]) { 
                    console.log("true")
                    sitePositionNav[i].classList = "active";
                } else {
                    if (i + 1 === sitePosition.length) {
                        return
                    } else {

                        sitePositionNav[i].classList = "";
                    }
                }
            }
            
        }, 100);
        
       
    })


    
    
    })