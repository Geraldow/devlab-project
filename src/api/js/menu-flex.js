$ (function() {

    var header = document.getElementById('navigation-header');
    var headroom = new Headroom (header);
    headroom.init();

    /**
     *  RESPONSIVE MENU
     *  WE CALCULATE THE WIDTH PAGE
     */

    var navigationWidth = $(window).width();
    var navigationLinks = $('#navigation-links');
    var navigationButtonHamburger = $('#navigation-button-hamburger');
    var navigationIcon = $('#navigation-button-hamburger .navigation-icon-button-hamburger');

    if (navigationWidth < 700) {
        navigationLinks.hide();
        navigationIcon.addClass('fa-bars');
    }

    navigationButtonHamburger.on ('click', function(e) {
        navigationLinks.slideToggle();
        navigationIcon.toggleClass('fa-bars');
        navigationIcon.toggleClass('fa-times');
    });

    $(window).on('resize', function() {
        if($(this).width() > 1023) {
            navigationLinks.show();
            navigationIcon.addClass('fa-times');
            navigationIcon.removeClass('fa-bars');
        } else {
            navigationLinks.hide();
            navigationIcon.addClass('fa-bars');
            navigationIcon.removeClass('fa-times');
        }
    })




})