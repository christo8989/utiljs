'use-strict';
var Uri = (function () {
    function Uri() {
        this.protocol = location.protocol;
        this.host = location.hostname;
        this.port = location.port || '443';
        this.path = this.removeTrailingSlash(location.pathname);
        this.query = location.search.replace('?', '');
        this.hash = location.hash.replace('#', '');
    }
    Uri.prototype.getBase = function () {
        if (this.base == null) {
            this.base = this.protocol + "//" + this.host + ":" + this.port;
        }
        return this.base;
    };
    Uri.prototype.getOrigin = function () {
        if (this.url == null) {
            this.url = "" + this.getBase() + this.path;
        }
        return this.url;
    };
    Uri.prototype.getHref = function () {
        if (this.href == null) {
            var queryString = this.getQueryString().length > 0
                ? "?" + this.getQueryString()
                : '';
            var hashString = this.getHash().length > 0
                ? "#" + this.getHash()
                : '';
            this.href = "" + this.getOrigin() + queryString + hashString;
        }
        return this.href;
    };
    Uri.prototype.getQueryString = function () {
        return this.query;
    };
    Uri.prototype.getParameters = function () {
        if (this.queryDictionary == null) {
            var result = [];
            var params = this.query.split('&');
            for (var i = 0; i < params.length; ++i) {
                var keyValue = params[i].split('=');
                var key = keyValue[0];
                var value = keyValue[1];
                result.push(new DictionaryItem(key, value));
            }
            this.queryDictionary = new Dictionary(result);
        }
        return this.queryDictionary;
    };
    Uri.prototype.getParameter = function (name) {
        return this.getParameters()[name];
    };
    Uri.prototype.getHash = function () {
        return this.hash;
    };
    Uri.prototype.removeTrailingSlash = function (path) {
        var lastIndex = path.length - 1;
        if (lastIndex >= 0) {
            var lastChar = path.charAt(lastIndex);
            if (lastChar === '/') {
                path.slice(lastIndex);
            }
        }
        return path;
    };
    return Uri;
}());
