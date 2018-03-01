/**
 * Created by www.Alga.me on 2/3/18.
 */

module.exports = {
    entry: './src/AlgaAsyncProcess.js',
    target: 'node',
    node: {},
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: `${__dirname}/dist`
    }
};
