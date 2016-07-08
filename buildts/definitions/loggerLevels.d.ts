declare class LoggerLevels {
    private default;
    private defaultName;
    private enum;
    /**
     * Default enum value.
     */
    DEFAULT: number;
    /**
     * Default enum name.
     */
    DEFAULT_NAME: string;
    Enum: {
        INFO: number;
        VERBOSE: number;
    };
    /**
     * Returns the value of the specified enum name.
     * @param {string} name
     */
    value(name: string): number;
    /**
     * Returns the name of the specified enum value.
     * @param {number} value
     */
    name(value: number): string;
    /**
     * Returns a specific name and vlaue based on the name or value.
     * Note: id can be the name or value of the enumeration item.
     * @param {string|number} id
     */
    private getNameValuePair(id);
}
