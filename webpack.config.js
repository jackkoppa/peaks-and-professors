const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: {
        'popup': path.join(__dirname, 'src/popup.ts'),
        'content-script': path.join(__dirname, 'src/content-script.ts'),
        'background': path.join(__dirname, 'src/background.ts')        
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        // have removed vendor files for now

        // pack common vender files
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor', 
        //     minChunks: Infinity
        // })

        // minify
        // new webpack.optimize.UglifyJsPlugin()
    ]
};
