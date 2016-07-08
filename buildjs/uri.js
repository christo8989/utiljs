/// <reference path="./dictionary.ts" />
'use-strict';
var Uri = (function () {
    function Uri() {
        this.protocol = location.protocol;
        this.host = location.hostname;
        this.port = location.port || '443';
        this.path = this.removeTrailingSlash(location.pathname);
        this.queryString = location.search.replace('?', '');
        this.hash = location.hash.replace('#', '');
    }
    Object.defineProperty(Uri.prototype, "Base", {
        /**
         * Example: https://www.domain.com:443
         */
        get: function () {
            if (this.base == null) {
                this.base = this.protocol + "//" + this.host + ":" + this.port;
            }
            return this.base;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "Origin", {
        /**
         * Example: https://www.domain.com:443/path/name
         */
        get: function () {
            if (this.url == null) {
                this.url = "" + this.Base + this.path;
            }
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "Href", {
        /**
         * Example: https://www.domain.com:443/path/name?query=string#hash
         */
        get: function () {
            if (this.href == null) {
                var queryString = this.QueryString.length > 0
                    ? "?" + this.QueryString
                    : '';
                var hashString = this.Hash.length > 0
                    ? "#" + this.Hash
                    : '';
                this.href = "" + this.Origin + queryString + hashString;
            }
            return this.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "QueryString", {
        /**
         * Example: query=string
         */
        get: function () {
            return this.queryString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "Hash", {
        /**
         * Example: hash
         */
        get: function () {
            return this.hash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "Parameters", {
        /**
         * Query parameters as a Dictionary.
         */
        get: function () {
            if (this.queryDictionary == null) {
                var result = {};
                var params = this.QueryString.split('&');
                for (var i = 0; i < params.length; ++i) {
                    var keyValue = params[i].split('=');
                    var key = keyValue[0];
                    var value = keyValue[1];
                    result[key] = value;
                }
                this.queryDictionary = new Dictionary(result);
            }
            return this.queryDictionary;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the value of the specified query parameter.
     * @param {string} name
     */
    Uri.prototype.parameter = function (name) {
        var result = this.Parameters[name];
        return result;
    };
    /**
     * Removes the trailing slash from a url.
     * @param {string} path
     */
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
