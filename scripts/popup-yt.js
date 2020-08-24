document.addEventListener('DOMContentLoaded', () => {

let ytPopupComponent = [...document.querySelectorAll("div.yt-popup")];
let modalPopup = document.querySelector("div.yt-popup-modal");
let active = false;
ytPopupComponent.forEach(single => {
    single.firstElementChild.addEventListener("click", (e) => {
        
        let clipSrc = single.children[0].dataset.ytClipSrc;
        let modalIframe = modalPopup.firstElementChild;
        modalIframe.src = clipSrc;

        modalPopup.classList.add('show-popup');
        document.body.style.overflowY = "hidden";
        active = !active;

    })
})

modalPopup.addEventListener('click', () => {
    if (active === true) {
        modalPopup.classList.remove('show-popup');
        active = !active;
        document.body.style.overflowY = "initial";
    }});

})