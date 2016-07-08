/// <reference path="./uri.ts" />
/// <reference path="./loggerLevels.ts" />
'use-strict';

class Logger {
    private levels;
    private level;

    public constructor(private uriHelper: Uri) {
        let queryValue = uriHelper.parameter('--level');
        this.levels = new LoggerLevels();
        this.level = queryValue == null
            ? this.levels.DEFAULT
            : queryValue;
    }

    /**
     * Level for logging.
     */
    get Level(): string {
        return this.level;
    }

    /**
     * Level name for logging.
     * @param {string} name 
     */
    get LevelName(): string {
        return this.levels.name(this.Level);
    }

    /**
     * Console logs when level is 0 (INFO) or higher.
     * @param {...} args 
     */
    public log(...args: any[]): void {
        if (this.Level >= this.levels.INFO) {
            console.log.apply(console, args);
        }
    }

    /**
     * Console logs when level is 1 (VERBOSE) or higher.
     * @param {...} args 
     */
    public logVerbose(...args: any[]): void {
        if (this.Level >= this.levels.VERBOSE) {
            this.log.apply(this, args);
        }
    }

    /**
     * Measures amount of time to execute function.
     * Then, console logs when level is 1 (VERBOSE) or higher.
     * @param {string} name
     * @param {Function} fn
     * @param {...} args
     */
    public logMetric(name: string, fn: Function, ...args: any[]): any {
        if (performance == null) {
            this.log(`Error: Performance is ${performance}.`);
            return;
        }

        let tStart = performance.now();
        let result = fn();
        let time = performance.now() - tStart;

        args.unshift(`${name}:`);
        args.push(`- ${time} ms`);
        this.logVerbose.apply(this, args);

        return result;
    }
}
