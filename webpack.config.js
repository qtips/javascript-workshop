const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill', // bundle.js vil inneholde polyfill koden for transformasjon og vår App.js
        './src/App.js'
    ],
    output: {                    // webpack lager bundle og putter det her
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'www'), //statiske filer lokasjon
        port:1234
        //quiet:false // debug?
    },
    module: {
        rules: [
            { // for alle js filer bruker babel-loader under src mappe
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'), //dirname er node konstant
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [{
                    loader:'style-loader',
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    }
};