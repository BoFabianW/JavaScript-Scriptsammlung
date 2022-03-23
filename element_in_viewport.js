function addClass(object) {

    let viewPort = $(window).scrollTop() + $(window).height();

    let out = $(object).offset();
        out.bottom = out.top + $(object).outerHeight();

    let check = !(viewPort < (out.top) || $(window).scrollTop() > (out.bottom));

    if (check) {
        $(object).addClass('active');
    } else {
        $(object).removeClass('active');
    }
}