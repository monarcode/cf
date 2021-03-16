

$(document).ready(function(){

    const sr = ScrollReveal({
        mobile: false,
        distance: '100px',
        origin: top,
        delay: 100,
        reset: true
    });

    const toggler = document.querySelector('#toggler');
    const menu = document.querySelector('.navbar__links');
    const images = document.querySelectorAll('.services__img');
    const content = document.querySelectorAll('.services__info');
    const whyus = document.querySelectorAll('.whyus__reason');
    const partner = document.querySelectorAll('.partners__partner');
    
    toggler.addEventListener('click', ()=>{
        toggler.classList.toggle('clicked');
        menu.classList.toggle('open__nav')
    });

    // navbar class toggle

    var controller = new ScrollMagic.Controller();

    var navScene = new ScrollMagic.Scene({
        triggerElement: '#about-us',
        triggerHook: 0.1
    })
    .setClassToggle('#navbar', 'shadow')
    .addTo(controller);


    // scroll reveal

    sr.reveal('.hero__content', {
        distance: '100%',
    });
    sr.reveal(images);
    sr.reveal(content, {
        scale: 0.5,
        delay: 200
    });
    sr.reveal(whyus, {
        reset: false,
        interval: 300,
        afterReveal: function(whyus){
            sr.clean(whyus)
        }
    });
    sr.reveal(partner, {
        reset: false,
        interval: 300,
        afterReveal: function(whyus){
            sr.clean(whyus)
        }
    });
})