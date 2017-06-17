const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath = path.join(__dirname, 'src/web-client');
const distPath = path.join(__dirname, 'build/web-client');

module.exports = {
    context: srcPath,
    entry: {
        entry: path.join(srcPath, 'entry.js')
    },

    output: {
        filename: '[name].js',
        path: distPath,
    },

    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(srcPath, 'index.html')
        }])
    ]
};