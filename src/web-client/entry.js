const path = require('path');

console.log("Entry: Running babel polyfill");
require('babel-polyfill');

const recompose = require('recompose');
const rxjsConfig = require('recompose/rxjsObservableConfig')
recompose.setObservableConfig(rxjsConfig);

console.log("Entry: Running app");
require('./app');