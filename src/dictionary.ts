'use-strict';

class Dictionary {
    public constructor ();
    public constructor (object: Object);
    public constructor (object?) {
        if (object != null) {
            for (let property in object) {
                if (object.hasOwnProperty(property)) {
                    this[property] = object[property];
                }
            }
        }
    }

    /**
     * Returns a copy of this object.
     */
    public clone(): Dictionary {
        let result = new Dictionary(this);
        return result;
    }

    /**
     * Checks if the key exists.
     * @param {string} key 
     */
    public exists(key: string): boolean {
        let result = this.hasOwnProperty(key);
        return result;
    }

    /**
     * Returns all the keys.
     */
    public keys(): string[] {
        let result = [];
        for (let key in this) {
            if (this.exists(key)) {
                result.push(key);
            }
        }
        return result;
    }

    /**
     * Returns all the values.
     */
    public values(): any[] {
        let result = [];
        for (let key in this) {
            if (this.exists(key)) {
                result.push(this[key]);
            }
        }
        return result;
    }

    /**
     * Adds a the value if the key doesn't exist.
     * @param {string} key 
     * @param {any} value 
     */
    public tryAdd(key: string, value: any): boolean {
        let isAdd = !this.exists(key) && typeof(value) !== 'undefined';
        if (isAdd) {
            this[key] = value;
        }
        return isAdd;
    }

    /**
     * Updates the value if the key exists.
     * @param {string} key 
     * @param {any} value 
     */
    public tryUpdate(key: string, value: any): boolean {
        let isUpdate = this.exists(key) && typeof(value) !== 'undefined';
        if (isUpdate) {
            this[key] = value;
        }
        return isUpdate;
    }

    /**
     * Deletes the item if the key exists.
     * @param {string} key 
     */
    public tryDelete(key: string): boolean {
        let isDelete = this.exists(key);
        if (isDelete) {
            delete this[key];
        }
        return isDelete;
    }
}
