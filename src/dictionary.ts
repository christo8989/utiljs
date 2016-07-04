'use-strict';

class DictionaryItem {
    private IsDictionaryItem;
    public constructor (public key: string, public value: any) {
        this.IsDictionaryItem = true;
    }
}

class Dictionary {
    public constructor ();
    public constructor (dicationary: Object);
    public constructor (dicationary: Dictionary);
    public constructor (dictionary: DictionaryItem[]);
    public constructor (dictionary?) {
        if (Array.isArray(dictionary)) {
            // Array of DictionaryItems
            for (let item in dictionary) {
                if (dictionary.hasOwnProperty(item)) {
                    this.addDictionaryItem(dictionary[item]);
                }
            }
        } else if (dictionary != null && dictionary.IsDictionaryItem) {
            // Object of DictionaryItem
            this.addDictionaryItem(dictionary);
        } else if (dictionary != null) {
            // Object
            for (let item in dictionary) {
                if (dictionary.hasOwnProperty(item)) {
                    let key = item;
                    let value = dictionary[item];
                    this[key] = value;
                }
            }
        }
    }

    public getDictionary() {
        return this;
    }

    public getKeys(): string[] {
        let result = [];
        for (let item in this) {
            if (this.hasOwnProperty(item)) {
                result.push(item);
            }
        }
        return result;
    }

    public getValues() {
        let result = [];
        for (let item in this) {
            if (this.hasOwnProperty(item)) {
                result.push(this[item]);
            }
        }
        return result;
    }

    public getValue(key: string) {
        return this[key];
    }

    public addItem(key: string, value: any) {
        this[key] = value;
    }

    public addDictionaryItem(item: DictionaryItem) {
        this[item.key] = item.value;
    }
}
