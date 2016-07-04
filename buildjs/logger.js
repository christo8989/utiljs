'use-strict';
var Logger = (function () {
    function Logger(urlHelper) {
        this.urlHelper = urlHelper;
        this.levels = {
            INFO: 0,
            VERBOSE: 1
        };
        var parameter = urlHelper.getParameter('--level');
        this.level = parameter == null
            ? this.levels.INFO
            : this.getLevelObject(parameter).value;
    }
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.level >= this.levels.INFO) {
            console.log.apply(console, args);
        }
    };
    Logger.prototype.logVerbose = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this.level >= this.levels.VERBOSE) {
            this.log.apply(this, args);
        }
    };
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
    Logger.prototype.getLevelsEnum = function () {
        return this.levels;
    };
    Logger.prototype.getLevelValue = function (id) {
        return this.getLevelObject(name).value;
    };
    Logger.prototype.getLevelName = function (id) {
        return this.getLevelObject(id).name;
    };
    Logger.prototype.getCurrentLevel = function () {
        return this.level;
    };
    Logger.prototype.getCurrentLevelName = function () {
        return this.getLevelName(this.level);
    };
    Logger.prototype.getLevelObject = function (id) {
        var result = { name: 'INFO', value: this.levels.INFO };
        if (typeof (id) !== 'string' && typeof (id) !== 'number') {
            // TODO: Log error?
            return result;
        }
        id = id.toString();
        for (var property in this.levels) {
            if (this.levels.hasOwnProperty(property)) {
                if (id.toUpperCase() === property.toUpperCase()
                    || id == this.levels[property]) {
                    result.name = property;
                    result.value = this.levels[property];
                }
            }
        }
        return result;
    };
    return Logger;
}());
