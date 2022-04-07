import './assets/sass/style.scss';
import 'normalize.css';
console.log("hello form");


(function () {
    const closeBanners= document.querySelectorAll(".c-banner__close");
    closeBanners.forEach( closeBanner => {
        closeBanner.addEventListener("click", event => {
            const banner= event.target.parentNode;
            banner.classList.add("collapse");

            banner.addEventListener("transitionend", function(event){
                if (event.target === this) {
                    this.remove();
                }
            })
        })
    })
})();