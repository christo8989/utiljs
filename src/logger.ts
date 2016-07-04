'use-strict';

class Logger {
    private levels = {
        INFO: 0,
        VERBOSE: 1,
    };

    private level;

    public constructor(private uriHelper: Uri) {
        let parameter = uriHelper.getParameter('--level');
        this.level = parameter == null
            ? this.levels.INFO
            : this.getLevelObject(parameter).value;
    }

    public log(...args: any[]) {
        if (this.level >= this.levels.INFO) {
            console.log.apply(console, args);
        }
    }

    public logVerbose(...args: any[]) {
        if (this.level >= this.levels.VERBOSE) {
            this.log.apply(this, args);
        }
    }

    public logMetric(name: string, fn: Function, ...args: any[]) {
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

    public getLevelsEnum() {
        return this.levels;
    }

    public getLevelValue(id: string) {
        return this.getLevelObject(name).value;
    }

    public getLevelName(id: number) {
        return this.getLevelObject(id).name;
    }

    public getCurrentLevel() {
        return this.level;
    }

    public getCurrentLevelName() {
        return this.getLevelName(this.level);
    }

    private getLevelObject(id: any) {
        let result = { name: 'INFO', value: this.levels.INFO };
        if (typeof(id) !== 'string' && typeof(id) !== 'number') {
            // TODO: Log error?
            return result;
        }

        id = id.toString();
        for (let property in this.levels) {
            if (this.levels.hasOwnProperty(property)) {
                if (id.toUpperCase() === property.toUpperCase()
                    || id == this.levels[property]) { // tslint:disable-line
                    result.name = property;
                    result.value = this.levels[property];
                }
            }
        }
        return result;
    }
}
