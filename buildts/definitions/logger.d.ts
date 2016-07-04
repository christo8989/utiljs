declare class Logger {
    private uriHelper;
    private levels;
    private level;
    constructor(uriHelper: Uri);
    log(...args: any[]): void;
    logVerbose(...args: any[]): void;
    logMetric(name: string, fn: Function, ...args: any[]): any;
    getLevelsEnum(): {
        INFO: number;
        VERBOSE: number;
    };
    getLevelValue(id: string): number;
    getLevelName(id: number): string;
    getCurrentLevel(): any;
    getCurrentLevelName(): string;
    private getLevelObject(id);
}
