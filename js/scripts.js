$(document).ready(function(){
    $(window).scroll(function(e) {
        $('.navbar')[$(window).scrollTop() >= 50 ? 'addClass' : 'removeClass']('navbar-hide');
    });
});
