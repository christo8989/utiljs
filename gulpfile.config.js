'use-strict';

var GulpConfig = (function () {
    this.source = 'src/';
    this.output = this.source;
    this.definitions = this.output + 'definitions/';
    this.sourcemaps = 'sourcemaps/';

    this.allTypeScript = this.source + '**/*.ts';
    this.allJavaScript = this.source + '**/*.js';
    
    this.typings = './typings/';
    this.libraryTypeScriptDefinitions = './typings/main/**/*.ts'; 
    
    return this;
})();

module.exports = GulpConfig;