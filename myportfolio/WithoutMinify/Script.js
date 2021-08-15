const objectIcon = document.getElementById("icon");
const Overlay = document.getElementsByClassName("categories-container");
const AnimationBoxes = document.querySelectorAll(".background-effect-container ul li");
const Link = document.querySelectorAll("a");
const Nav = document.getElementsByClassName("nav");
const DesignSlider = document.querySelector(".design");
let currentlyClicking = false;
let startX;
let scrollLeft;
let ValidationIcon = false;
let randomTime = Math.random()
Link.forEach(function iterar(element) {

    element.addEventListener("click", CloseCategoriesByLink);

});
Nav[0].addEventListener("click", ManageCategories);
Overlay[0].addEventListener("click", ManageCategories);
DesignSlider.addEventListener("mousedown", (e) => {
    currentlyClicking = true;
    startX = e.pageX - DesignSlider.offsetLeft;
    scrollLeft = DesignSlider.scrollLeft;

});
DesignSlider.addEventListener("mouseleave", (e) => {
    currentlyClicking = false;
});
DesignSlider.addEventListener("mouseup", (e) => {
    currentlyClicking = false;
});
DesignSlider.addEventListener("mousemove", (e) => {
    if (!currentlyClicking) {
        return;
    }
    e.preventDefault();
    const x = e.pageX - DesignSlider.offsetLeft;
    const move = x - startX;
    DesignSlider.scrollLeft = scrollLeft - move;

});

AnimationBoxes.forEach(function Iterate(element) {
    element.addEventListener("animationstart", ChangeAnimation);
    element.addEventListener("animationiteration", ChangeAnimation);


    function ChangeAnimation() {
        // let delayTime = (Math.random() * (3.5 - 0));
        //delayTime = delayTime + "s";
        //element.style.setProperty("--animation-dilay-time", delayTime);
        let color = Math.floor(Math.random() * (999999 - 000000)) + 000000;
        color = "#" + color;
        element.style.setProperty("--animation-color", color);
        let color2 = Math.floor(Math.random() * (999999 - 000000)) + 000000;
        color2 = "#" + color2;

        element.style.setProperty("--animation-color2", color2);
        let XStartPosition = Math.floor(Math.random() * (-300));
        XStartPosition += "px";


        element.style.setProperty("--left-position", XStartPosition);
        let YPosition = Math.floor(Math.random() * (800 - 80)) + 50;

        YPosition = YPosition + "px";
        element.style.setProperty("--top-position", YPosition);



    }
});



function ManageCategories(evento) {
    if (evento.target.id == "icon" && !ValidationIcon) {
        Overlay[0].style.display = "block";
        ValidationIcon = true;
    } else if ((evento.target.id == "icon" && (ValidationIcon == true) || (evento.target.className == "black-screen") || ((evento.target.className == "nav")))) {
        Overlay[0].style.display = "none";
        ValidationIcon = false
    }

}

function CloseCategoriesByLink(evento) {
    Overlay[0].style.display = "none";
}