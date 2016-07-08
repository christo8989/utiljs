/// <reference path="uri.d.ts" />
/// <reference path="loggerLevels.d.ts" />
declare class Logger {
    private uriHelper;
    private levels;
    private level;
    constructor(uriHelper: Uri);
    /**
     * Level for logging.
     */
    Level: string;
    /**
     * Level name for logging.
     * @param {string} name
     */
    LevelName: string;
    /**
     * Console logs when level is 0 (INFO) or higher.
     * @param {...} args
     */
    log(...args: any[]): void;
    /**
     * Console logs when level is 1 (VERBOSE) or higher.
     * @param {...} args
     */
    logVerbose(...args: any[]): void;
    /**
     * Measures amount of time to execute function.
     * Then, console logs when level is 1 (VERBOSE) or higher.
     * @param {string} name
     * @param {Function} fn
     * @param {...} args
     */
    logMetric(name: string, fn: Function, ...args: any[]): any;
}
