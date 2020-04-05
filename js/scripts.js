$(document).ready(function() {
    
    // scroll functions
    $(window).scroll(function(e) {

        // add/remove class to navbar when scrolling to hide/show
        $('.navbar')[$(window).scrollTop() >= 50 ? 'addClass' : 'removeClass']('navbar-hide');

    });

    let navbarHeight = $('.navbar').height();

    $('header').css({ marginTop :  `${navbarHeight + 30}px` });
});

