(function () {
    this.query = new Query();
    this.logger = new Logger(new Query());

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

console.log('');

console.log('Dictionary Tests');
var foo = new Dictionary([
    new DictionaryItem('first', 'first value'),
    new DictionaryItem('second', 'second value')]);
var boo = new Dictionary(new DictionaryItem('third', 'third value'));
var goo = new Dictionary(foo.getDictionary());
var poo = new Dictionary(foo);
var roo = new Dictionary({a:123, b: true, c: [123, '123']});
var too = new Dictionary();
goo.addItem('new', 'item');
poo.addItem('new', 'item');
poo.addItem('new', 'item');
too.addItem('new', 'item');
console.log('foo:', foo.getDictionary());
console.log('boo:', boo.getDictionary());
console.log('goo:', goo.getDictionary());
console.log('poo:', poo.getDictionary());
console.log('roo:', roo.getDictionary());
console.log('too:', too.getDictionary());
