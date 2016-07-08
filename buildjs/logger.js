/// <reference path="./uri.ts" />
/// <reference path="./loggerLevels.ts" />
'use-strict';
var Logger = (function () {
    function Logger(uriHelper) {
        this.uriHelper = uriHelper;
        var queryValue = uriHelper.parameter('--level');
        this.levels = new LoggerLevels();
        this.level = queryValue == null
            ? this.levels.DEFAULT
            : queryValue;
    }
    Object.defineProperty(Logger.prototype, "Level", {
        /**
         * Level for logging.
         */
        get: function () {
            return this.level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "LevelName", {
        /**
         * Level name for logging.
         * @param {string} name
         */
        get: function () {
            return this.levels.name(this.Level);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Console logs when level is 0 (INFO) or higher.
     * @param {...} args
     */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.Level >= this.levels.INFO) {
            console.log.apply(console, args);
        }
    };
    /**
     * Console logs when level is 1 (VERBOSE) or higher.
     * @param {...} args
     */
    Logger.prototype.logVerbose = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.Level >= this.levels.VERBOSE) {
            this.log.apply(this, args);
        }
    };
    /**
     * Measures amount of time to execute function.
     * Then, console logs when level is 1 (VERBOSE) or higher.
     * @param {string} name
     * @param {Function} fn
     * @param {...} args
     */
    Logger.prototype.logMetric = function (name, fn) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (performance == null) {
            this.log("Error: Performance is " + performance + ".");
            return;
        }
        var tStart = performance.now();
        var result = fn();
        var time = performance.now() - tStart;
        args.unshift(name + ":");
        args.push("- " + time + " ms");
        this.logVerbose.apply(this, args);
        return result;
    };
    return Logger;
}());
