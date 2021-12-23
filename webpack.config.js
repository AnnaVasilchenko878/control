const PATH = require('path'),
miniCssExtractPlugin = require('mini-css-extract-plugin'),
ISDEV = process.env.NODE_ENV === 'development',
ISPROD = !ISDEV;
const filename = (ext) =>ISDEV?`[name].${ext}`:`[name].[contenthash].${ext}`;
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: PATH.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: PATH.resolve(__dirname, 'app'),
        clean: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: PATH.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: ISPROD
            }

        }),
        new miniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [miniCssExtractPlugin.loader, 'css-loader']
              },
            {
                test: /\.less$/i,
                use: [miniCssExtractPlugin.loader, 'css-loader','less-loader']
            }
        ]
    }
};