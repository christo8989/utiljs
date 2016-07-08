(function () {
    this.query = new Uri();
    this.logger = new Logger(new Uri());
    this.levels = new LoggerLevels();

    this.WaitForFunction = function(milliseconds) { 
       return function () {
            var tStart = performance.now(); 
            while((performance.now() - tStart) < milliseconds) {};
        };
    }

    return this;
})();

console.log('Levels Enum:', levels);
console.log('Current Level:', logger.Level + ',', 'Current Level Name:', logger.LevelName);
console.log('Regular Console Log:', '123', 123, {a:'123', b:123}, true);
logger.log('Log:', '123', 123, {a:'123', b:123}, true);
logger.logVerbose('Log Verbose:', '123', 123, {a:'123', b:123}, true);
logger.logMetric('Log Metric', WaitForFunction(500), '123', 123, {a:'123', b:123}, true);

console.log('');

console.log('Dictionary Tests');
var roo = new Dictionary({a:123, b: true, c: [123, '123']});
var too = new Dictionary();
too.tryAdd('new', 'item');
console.log('roo:', roo);
console.log('too:', too);
