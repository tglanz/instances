const path = require('path');

console.log("Entry: Running babel polyfill");
require('babel-polyfill');

console.log("Entry: Registering root path");
const rootPath = path.resolve(__dirname, '..');
require('app-module-path').addPath(rootPath);

console.log("Entry: Running server");
require('./server');