declare class Dictionary {
    constructor();
    constructor(object: Object);
    /**
     * Returns a copy of this object.
     */
    clone(): Dictionary;
    /**
     * Checks if the key exists.
     * @param {string} key
     */
    exists(key: string): boolean;
    /**
     * Returns all the keys.
     */
    keys(): string[];
    /**
     * Returns all the values.
     */
    values(): any[];
    /**
     * Adds a the value if the key doesn't exist.
     * @param {string} key
     * @param {any} value
     */
    tryAdd(key: string, value: any): boolean;
    /**
     * Updates the value if the key exists.
     * @param {string} key
     * @param {any} value
     */
    tryUpdate(key: string, value: any): boolean;
    /**
     * Deletes the item if the key exists.
     * @param {string} key
     */
    tryDelete(key: string): boolean;
}
