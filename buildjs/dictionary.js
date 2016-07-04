'use-strict';
var DictionaryItem = (function () {
    function DictionaryItem(key, value) {
        this.key = key;
        this.value = value;
        this.IsDictionaryItem = true;
    }
    return DictionaryItem;
}());
var Dictionary = (function () {
    function Dictionary(dictionary) {
        if (Array.isArray(dictionary)) {
            // Array of DictionaryItems
            for (var item in dictionary) {
                if (dictionary.hasOwnProperty(item)) {
                    this.addDictionaryItem(dictionary[item]);
                }
            }
        }
        else if (dictionary != null && dictionary.IsDictionaryItem) {
            // Object of DictionaryItem
            this.addDictionaryItem(dictionary);
        }
        else if (dictionary != null) {
            // Object
            for (var item in dictionary) {
                if (dictionary.hasOwnProperty(item)) {
                    var key = item;
                    var value = dictionary[item];
                    this[key] = value;
                }
            }
        }
    }
    Dictionary.prototype.getDictionary = function () {
        return this;
    };
    Dictionary.prototype.getKeys = function () {
        var result = [];
        for (var item in this) {
            if (this.hasOwnProperty(item)) {
                result.push(item);
            }
        }
        return result;
    };
    Dictionary.prototype.getValues = function () {
        var result = [];
        for (var item in this) {
            if (this.hasOwnProperty(item)) {
                result.push(this[item]);
            }
        }
        return result;
    };
    Dictionary.prototype.getValue = function (key) {
        return this[key];
    };
    Dictionary.prototype.addItem = function (key, value) {
        this[key] = value;
    };
    Dictionary.prototype.addDictionaryItem = function (item) {
        this[item.key] = item.value;
    };
    return Dictionary;
}());
