const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill', // bundle.js vil inneholde polyfill koden for transformasjon og vår App.js, uten denne vil ikke async og await
        './src/App.js' //hoved js fila.
    ],
    output: {                    // webpack lager bundle og putter det her
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'www'), //statiske filer lokasjon
        port:1234
        //quiet:true // viser mindre output
    },
    module: {
        rules: [
            { // for alle js filer under src mappen, bruke babel-loader
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'), //dirname er node konstant
                loader: 'babel-loader'
            },
            { // for alle css og scsss
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