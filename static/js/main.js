$(document).ready(function () {

    // Gestion des sous menu
    $('nav li').hover(function () {
        var subMenu = $(this).find('.sub-nav');
        subMenu.fadeIn();

        $(this).mouseleave(function () {
            subMenu.fadeOut();
        });
    });

});