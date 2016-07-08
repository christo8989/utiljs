/// <reference path="dictionary.d.ts" />
declare class Uri {
    private protocol;
    private host;
    private port;
    private path;
    private queryString;
    private hash;
    private base;
    private url;
    private href;
    private queryDictionary;
    constructor();
    /**
     * Example: https://www.domain.com:443
     */
    Base: string;
    /**
     * Example: https://www.domain.com:443/path/name
     */
    Origin: string;
    /**
     * Example: https://www.domain.com:443/path/name?query=string#hash
     */
    Href: string;
    /**
     * Example: query=string
     */
    QueryString: string;
    /**
     * Example: hash
     */
    Hash: string;
    /**
     * Query parameters as a Dictionary.
     */
    Parameters: Dictionary;
    /**
     * Returns the value of the specified query parameter.
     * @param {string} name
     */
    parameter(name: string): string;
    /**
     * Removes the trailing slash from a url.
     * @param {string} path
     */
    private removeTrailingSlash(path);
}
