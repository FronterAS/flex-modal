(function () {
    'use strict';

    var calcHeight = function () {
        var h = $('#modal').height(),
            tPadding = $('#section').css('padding-top');

        $('#section').height(h - parseInt(tPadding, 10));
    };

    $(function () {
        calcHeight();
    });
}(jQuery));
