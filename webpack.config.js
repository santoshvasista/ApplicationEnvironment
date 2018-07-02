const path = require('path');

var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

//var UrlResolver = new webpack.DefinePlugin({
//    __API__: apiHost
//});

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, "/node_modules/")
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output:{
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    watch: true,
    plugins: [HTMLWebpackPluginConfig]
};