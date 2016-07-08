'use-strict';

var GulpConfig = (function () {
    this.source = 'src/';
    this.tsoutput = 'buildts/';
    this.jsoutput = 'buildjs/';
    this.definitions = this.tsoutput + 'definitions/';
    this.sourcemaps = 'sourcemaps/';

    this.allTypeScript = this.source + '**/*.ts';
    this.allJavaScript = this.jsoutput + '**/*.js';
    this.ignoreAllMinifiedJavaScript = '!' + this.jsoutput + '**/*min.js';
    
    this.typings = './typings/';
    this.libraryTypeScriptDefinitions = './typings/main/**/*.ts'; 

    this.tscOptions = {
        target: 'ES5',
        sortOutput: true,
    };
    
    return this;
})();

module.exports = GulpConfig;