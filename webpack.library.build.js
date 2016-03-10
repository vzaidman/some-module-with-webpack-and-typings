var webpack = require('webpack');

module.exports = {
    entry: ['./src/index.ts'],
    output: {
        filename: 'index.js',
        path: './dist',
        libraryTarget: 'commonjs2'
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ warning: false, mangle: true, comments: false })
    ],
    externals: {
        'angular': { root: 'angular' },
        'lodash': { root: '_' }
    },
    module:{
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.tpl$/, loader: 'raw' }
        ]
    }
};