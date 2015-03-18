(function () {
    'use strict';

    var calcHeight = function () {
        var h = $('#modal').height() - $('#header').height();

        $('#section').height(h);
    };

    $(function () {
        calcHeight();
    });
}(jQuery));
