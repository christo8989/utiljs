'use-strict';
var Dictionary = (function () {
    function Dictionary(object) {
        if (object != null) {
            for (var property in object) {
                if (object.hasOwnProperty(property)) {
                    this[property] = object[property];
                }
            }
        }
    }
    /**
     * Returns a copy of this object.
     */
    Dictionary.prototype.clone = function () {
        var result = new Dictionary(this);
        return result;
    };
    /**
     * Checks if the key exists.
     * @param {string} key
     */
    Dictionary.prototype.exists = function (key) {
        var result = this.hasOwnProperty(key);
        return result;
    };
    /**
     * Returns all the keys.
     */
    Dictionary.prototype.keys = function () {
        var result = [];
        for (var key in this) {
            if (this.exists(key)) {
                result.push(key);
            }
        }
        return result;
    };
    /**
     * Returns all the values.
     */
    Dictionary.prototype.values = function () {
        var result = [];
        for (var key in this) {
            if (this.exists(key)) {
                result.push(this[key]);
            }
        }
        return result;
    };
    /**
     * Adds a the value if the key doesn't exist.
     * @param {string} key
     * @param {any} value
     */
    Dictionary.prototype.tryAdd = function (key, value) {
        var isAdd = !this.exists(key) && typeof (value) !== 'undefined';
        if (isAdd) {
            this[key] = value;
        }
        return isAdd;
    };
    /**
     * Updates the value if the key exists.
     * @param {string} key
     * @param {any} value
     */
    Dictionary.prototype.tryUpdate = function (key, value) {
        var isUpdate = this.exists(key) && typeof (value) !== 'undefined';
        if (isUpdate) {
            this[key] = value;
        }
        return isUpdate;
    };
    /**
     * Deletes the item if the key exists.
     * @param {string} key
     */
    Dictionary.prototype.tryDelete = function (key) {
        var isDelete = this.exists(key);
        if (isDelete) {
            delete this[key];
        }
        return isDelete;
    };
    return Dictionary;
}());
