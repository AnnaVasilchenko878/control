const PATH = require('path'),
ISDEV = process.env.NODE_ENV === 'development',
ISPROD = !ISDEV;
const filename = (ext) =>ISDEV?`[name].${ext}`:`[name].[contenthash].${ext}`;
module.exports = {
    context: PATH.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: PATH.resolve(__dirname, 'app')
    }
};