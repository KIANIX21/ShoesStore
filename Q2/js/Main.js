/* Show Menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // validate that variabels exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // we and the show-menu class to the div tag with the nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// remove menu mobile 
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu') 
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// change background header 
function scrollHeader(){
    const nav = document.getElementById('header')
// when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
if(this.scrollY >= 200) nav.classList.add('scroll-header');
else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Show Scroll Back To Top //
function scrollTop(){
    const scrollTop = document.getElementById('scroll-Top')
    // when the scroll is higher than 560 viewport height
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// slide show
var slideIndex = 1;
showSlides(slideIndex);
// next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}
// thumbnail img control
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots");
    if(n > slides.length) {slideIndex = 1}
    if(n < 1){slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home, .about__data, .about__img, 
            .services__content, .product, .contact__data, 
            .contact__button, .footer__content, .detail__img, .detail__data`,{
        interval: 200
})