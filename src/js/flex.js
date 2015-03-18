(function () {
    'use strict';

    var calcHeight = function () {
        // we can't just grab the height of the flex-item as it is totally whack in IE10 and 11
        var h = $('#modal').height() - $('#header').height();

        $('#directive').height(h);
    };

    $(function () {
        calcHeight();
    });
}(jQuery));
