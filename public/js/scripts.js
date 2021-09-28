//Variables
let svgSocialMedia = document.querySelectorAll(".social__media svg");
let ideaLink = document.querySelectorAll(".idea__link");
let containerLinks = document.querySelector(".container__links");
let hamburger = document.querySelector(".hamburger");

//Funtions
ideaLink.forEach(element =>{
    element.addEventListener("mouseover", () =>{
        if(element.nextElementSibling.classList.value == "link--yellow"){
            element.nextElementSibling.classList.add("link__active--yellow");
        } else{
            element.nextElementSibling.classList.add("link__active--red");
        }
    })
    element.addEventListener("mouseout", () =>{
        element.nextElementSibling.classList.remove("link__active--yellow");
        element.nextElementSibling.classList.remove("link__active--red");
    })
})
svgSocialMedia.forEach(element => {
    element.addEventListener("mouseover", () =>{
        element.firstChild.classList.add("fill");
    })
    element.addEventListener("mouseout", () =>{
        element.firstChild.classList.remove("fill");
    })
});

hamburger.addEventListener("click", () =>{
    if(containerLinks.classList.contains("menu--mobile")){
        containerLinks.classList.remove("menu--mobile");
    } else{
        containerLinks.classList.add("menu--mobile");
    }
})