/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { version } = require('./package');
const srcPath = path.resolve(__dirname, './src');
const buildPath = path.resolve(__dirname, './build');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: srcPath,
    output: {
        path: buildPath,
        filename: `[name]-v${version}.[hash].js`,
        sourceMapFilename: `[name]-v${version}.[hash].map`,
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Game of three',
            inject: true,
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
            },
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
    },
    devServer: {
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true,
        hot: true,
    },
    target: 'web',
};
