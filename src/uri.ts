'use-strict';

class Uri {
    // https://www.domain.com:443/path/name?query=string#hash
    private protocol: string; // https:
    private host: string; // www.domain.com
    private port: string; // 443 (default)
    private path: string; // path/name
    private query: string; // ?query=string
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
        this.query = location.search.replace('?', '');
        this.hash = location.hash.replace('#', '');
    }

    public getBase() {
        if (this.base == null) {
            this.base = `${this.protocol}//${this.host}:${this.port}`;
        }

        return this.base;
    }

    public getOrigin() {
        if (this.url == null) {
            this.url = `${this.getBase()}${this.path}`;
        }

        return this.url;
    }

    public getHref() {
        if (this.href == null) {
            let queryString = this.getQueryString().length > 0
                ? `?${this.getQueryString()}`
                : '';
            let hashString = this.getHash().length > 0
                ? `#${this.getHash()}`
                : '';
            this.href = `${this.getOrigin()}${queryString}${hashString}`;
        }

        return this.href;
    }

    public getQueryString() {
        return this.query;
    }

    public getParameters() {
        if (this.queryDictionary == null) {
            let result = [];
            let params = this.query.split('&');
            for (let i = 0; i < params.length; ++i) {
                let keyValue = params[i].split('=');
                let key = keyValue[0];
                let value = keyValue[1];
                result.push(new DictionaryItem(key, value));
            }
            this.queryDictionary = new Dictionary(result);
        }

        return this.queryDictionary;
    }

    public getParameter(name: string) {
        return this.getParameters()[name];
    }

    public getHash() {
        return this.hash;
    }

    private removeTrailingSlash(path: string) {
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
