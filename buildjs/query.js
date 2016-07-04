'use-strict';
var Query = (function () {
    function Query() {
    }
    Query.prototype.getUrlParameter = function (name, url) {
        if (url === void 0) { url = window.location.href; }
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        var result;
        if (!results) {
            result = null;
        }
        else if (!results[2]) {
            result = '';
        }
        else {
            result = decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
        return result;
    };
    return Query;
}());
