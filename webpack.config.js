const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index:'./src/index.js',
        page: './src/page.js',
        about: './src/about.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}