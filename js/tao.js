!function(e) {
    "use strict";
    e(window).on("load", function() {
        e("#spinner").animate({
            opacity: 0
        }, 400, function() {
            e("#spinner").css({
                display: "none"
            })
        })
    })
}(jQuery);
