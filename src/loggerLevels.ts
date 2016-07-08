'use-strict';

class LoggerLevels {
    private default = 0;
    private defaultName = 'INFO';
    private enum = {
        INFO: 0,
        VERBOSE: 1,
    };

    /**
     * Default enum value.
     */
    get DEFAULT(): number {
        return this.default;
    }

    /**
     * Default enum name.
     */
    get DEFAULT_NAME(): string {
        return this.defaultName;
    }

    get Enum() {
        return this.enum;
    }

    /**
     * Returns the value of the specified enum name.
     * @param {string} name 
     */
    public value(name: string): number {
        return this.getNameValuePair(name).value;
    }

    /**
     * Returns the name of the specified enum value.
     * @param {number} value 
     */
    public name(value: number): string {
        return this.getNameValuePair(value).name;
    }

    /**
     * Returns a specific name and vlaue based on the name or value.
     * Note: id can be the name or value of the enumeration item.
     * @param {string|number} id 
     */
    private getNameValuePair(id: any) {
        // TODO: Algorithmically set the default somehwere else.
        let result = { name: this.DEFAULT_NAME, value: this.DEFAULT };
        if (typeof(id) !== 'string' && typeof(id) !== 'number') {
            // TODO: Log error?
            return result;
        }

        id = id.toString();
        for (let property in this.Enum) {
            if (this.Enum.hasOwnProperty(property)) {
                if (id.toUpperCase() === property.toUpperCase()
                    || id == this.Enum[property]) { // tslint:disable-line
                    result.name = property;
                    result.value = this.Enum[property];
                }
            }
        }
        return result;
    }
}
