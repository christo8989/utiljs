declare class Logger {
    private levels;
    private level;
    constructor(getParameter: Function);
    log(...args: any[]): void;
    logVerbose(...args: any[]): void;
    logMetric(name: string, fn: Function, ...args: any[]): any;
    getLevelsEnum(): {
        INFO: number;
        VERBOSE: number;
    };
    getLevelValue(id: string): any;
    getLevelName(id: number): any;
    getCurrentLevel(): any;
    getCurrentLevelName(): any;
    private getLevelObject(id);
}
