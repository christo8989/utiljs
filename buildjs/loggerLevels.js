'use-strict';
var LoggerLevels = (function () {
    function LoggerLevels() {
        this.default = 0;
        this.defaultName = 'INFO';
        this.enum = {
            INFO: 0,
            VERBOSE: 1,
        };
    }
    Object.defineProperty(LoggerLevels.prototype, "DEFAULT", {
        /**
         * Default enum value.
         */
        get: function () {
            return this.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerLevels.prototype, "DEFAULT_NAME", {
        /**
         * Default enum name.
         */
        get: function () {
            return this.defaultName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerLevels.prototype, "Enum", {
        get: function () {
            return this.enum;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the value of the specified enum name.
     * @param {string} name
     */
    LoggerLevels.prototype.value = function (name) {
        return this.getNameValuePair(name).value;
    };
    /**
     * Returns the name of the specified enum value.
     * @param {number} value
     */
    LoggerLevels.prototype.name = function (value) {
        return this.getNameValuePair(value).name;
    };
    /**
     * Returns a specific name and vlaue based on the name or value.
     * Note: id can be the name or value of the enumeration item.
     * @param {string|number} id
     */
    LoggerLevels.prototype.getNameValuePair = function (id) {
        // TODO: Algorithmically set the default somehwere else.
        var result = { name: this.DEFAULT_NAME, value: this.DEFAULT };
        if (typeof (id) !== 'string' && typeof (id) !== 'number') {
            // TODO: Log error?
            return result;
        }
        id = id.toString();
        for (var property in this.Enum) {
            if (this.Enum.hasOwnProperty(property)) {
                if (id.toUpperCase() === property.toUpperCase()
                    || id == this.Enum[property]) {
                    result.name = property;
                    result.value = this.Enum[property];
                }
            }
        }
        return result;
    };
    return LoggerLevels;
}());
