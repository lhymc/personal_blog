'use strict';

$(window).scroll(function() {
    let nav = $("#right-nav");
    let top_abs = nav.offset().top - $(window).scrollTop();
    if (top_abs <= 30) {
        nav.css("position", "fixed");
        nav.css("top", "30px");
    }
    else {
        let top = nav.offset().top;
        if (top < 750) {
            nav.css("position", "unset");
            nav.css("top", "0");
        }
    }
});
