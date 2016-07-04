declare class Uri {
    private protocol;
    private host;
    private port;
    private path;
    private query;
    private hash;
    private base;
    private url;
    private href;
    private queryDictionary;
    constructor();
    getBase(): string;
    getOrigin(): string;
    getHref(): string;
    getQueryString(): string;
    getParameters(): Dictionary;
    getParameter(name: string): any;
    getHash(): string;
    private removeTrailingSlash(path);
}
