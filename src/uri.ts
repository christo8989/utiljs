/// <reference path="./dictionary.ts" />
'use-strict';

class Uri {
    // Example: https://www.domain.com:443/path/name?query=string#hash
    private protocol: string; // https:
    private host: string; // www.domain.com
    private port: string; // 443 (default)
    private path: string; // path/name
    private queryString: string; // ?query=string
    private hash: string; // hash
    private base: string;
    private url: string;
    private href: string;
    private queryDictionary: Dictionary;

    public constructor() {
        this.protocol = location.protocol;
        this.host = location.hostname;
        this.port = location.port || '443';
        this.path = this.removeTrailingSlash(location.pathname);
        this.queryString = location.search.replace('?', '');
        this.hash = location.hash.replace('#', '');
    }

    /**
     * Example: https://www.domain.com:443
     */
    get Base(): string {
        if (this.base == null) {
            this.base = `${this.protocol}//${this.host}:${this.port}`;
        }

        return this.base;
    }

    /**
     * Example: https://www.domain.com:443/path/name
     */
    get Origin(): string {
        if (this.url == null) {
            this.url = `${this.Base}${this.path}`;
        }

        return this.url;
    }

    /**
     * Example: https://www.domain.com:443/path/name?query=string#hash
     */
    get Href(): string {
        if (this.href == null) {
            let queryString = this.QueryString.length > 0
                ? `?${this.QueryString}`
                : '';
            let hashString = this.Hash.length > 0
                ? `#${this.Hash}`
                : '';
            this.href = `${this.Origin}${queryString}${hashString}`;
        }

        return this.href;
    }

    /**
     * Example: query=string
     */
    get QueryString(): string {
        return this.queryString;
    }

    /**
     * Example: hash
     */
    get Hash(): string {
        return this.hash;
    }

    /**
     * Query parameters as a Dictionary.
     */
    get Parameters(): Dictionary {
        if (this.queryDictionary == null) {
            let result = {};
            let params = this.QueryString.split('&');
            for (let i = 0; i < params.length; ++i) {
                let keyValue = params[i].split('=');
                let key = keyValue[0];
                let value = keyValue[1];
                result[key] = value;
            }
            this.queryDictionary = new Dictionary(result);
        }

        return this.queryDictionary;
    }

    /**
     * Returns the value of the specified query parameter.
     * @param {string} name 
     */
    public parameter(name: string): string {
        let result = this.Parameters[name];
        return result;
    }

    /**
     * Removes the trailing slash from a url.
     * @param {string} path
     */
    private removeTrailingSlash(path: string): string {
        let lastIndex = path.length - 1;
        if (lastIndex >= 0) {
            let lastChar = path.charAt(lastIndex);
            if (lastChar === '/') {
                path.slice(lastIndex);
            }
        }
        return path;
    }
}
