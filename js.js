$(document).ready(function () {
    $(window).on('scroll', function () {
        var windowHeight = $(window).height(),
            gridTop = windowHeight * .2,
            gridBottom = windowHeight * .8;
        $('#introbox *').each(function () {
            var thisTop = $(this).offset().top - $(window).scrollTop();

            if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
                $("a").css("border-bottom", "none");
                $("#show_intro").css('border-bottom', '5px solid #D2B48C');
            }
        });
        $('#webbox *').each(function () {
            var thisTop = $(this).offset().top - $(window).scrollTop();

            if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
                $("a").css("border-bottom", "none");
                $("#show_websites").css('border-bottom', '5px solid #D2B48C');
            }
        });
        $('#aboutbox *').each(function () {
            var thisTop = $(this).offset().top - $(window).scrollTop();

            if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
                $("a").css("border-bottom", "none");
                $("#show_about").css('border-bottom', '5px solid #D2B48C');
            }
        });
        $('#skillsbox *').each(function () {
            var thisTop = $(this).offset().top - $(window).scrollTop();

            if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
                $("a").css("border-bottom", "none");
                $("#show_skills").css('border-bottom', '5px solid #D2B48C');
            }
        });
        $('#contactbox *').each(function () {
            var thisTop = $(this).offset().top - $(window).scrollTop();

            if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
                $("a").css("border-bottom", "none");
                $("#show_contact").css('border-bottom', '5px solid #D2B48C');
            }
        });
    });
    $(window).trigger('scroll');
});