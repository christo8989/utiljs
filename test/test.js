(function () {
    this.query = new Query();
    this.logger = new Logger(query.getUrlParameter);

    this.WaitForFunction = function(milliseconds) { 
       return function () {
            var tStart = performance.now(); 
            while((performance.now() - tStart) < milliseconds) {};
        };
    }

    return this;
})();

console.log('Levels Enum:', logger.getLevelsEnum());
console.log('Current Level:', logger.getCurrentLevel() + ',', 'Current Level Name:', logger.getCurrentLevelName());
console.log('Regular Console Log:', '123', 123, {a:'123', b:123}, true);
logger.log('Log:', '123', 123, {a:'123', b:123}, true);
logger.logVerbose('Log Verbose:', '123', 123, {a:'123', b:123}, true);
logger.logMetric('Log Metric', WaitForFunction(500), '123', 123, {a:'123', b:123}, true);