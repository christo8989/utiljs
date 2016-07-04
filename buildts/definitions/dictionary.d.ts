declare class DictionaryItem {
    key: string;
    value: any;
    private IsDictionaryItem;
    constructor(key: string, value: any);
}
declare class Dictionary {
    constructor();
    constructor(dicationary: Object);
    constructor(dicationary: Dictionary);
    constructor(dictionary: DictionaryItem[]);
    getDictionary(): this;
    getKeys(): string[];
    getValues(): any[];
    getValue(key: string): any;
    addItem(key: string, value: any): void;
    addDictionaryItem(item: DictionaryItem): void;
}
