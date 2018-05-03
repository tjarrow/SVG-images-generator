'use strict';

const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin   = require('stylelint-webpack-plugin');
const path              = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        library: 'cover'
    },
    module: {
        rules: [
            {
                /**
                 * Use for all JS files loaders below
                 * - babel-loader
                 * - eslint-loader
                 */
                test: /\.js$/,
                use : [
                    /** Babel loader */
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ 'env' ]
                        },
                    },
                    /** ES lint For webpack build */
                    // {
                    //     loader: 'eslint-loader',
                    //     options: {
                    //         fix: true,
                    //         sourceType: 'module'
                    //     }
                    // }
                ]
            },
            {
                /**
                 * Use for all CSS files loaders below
                 * - extract-text-webpack-plugin
                 * - postcss-loader
                 */
                test: /\.css$/,
                include: path.resolve(__dirname,'src/style'),
                exclude: /^node_modules$/,
                //include: __dirname + '/src',
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                          minimize: 1,
                          importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ])
            },
            {
                /**
                 * Use for all SVG files loadews below
                 * - svg-inline-loader
                 */
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file-loader?name=[name].[ext]'

            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
         poll: 1000
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : false,
    externals: {

    },
    plugins: [

        /** Lint CSS */
        // new StyleLintPlugin({
        //     context : './src/styles',
        //     files : 'main.css'
        // }),

        /** Минифицируем CSS и JS */
        // new webpack.optimize.UglifyJsPlugin(),

        /** Block build if errors found */
        new webpack.NoEmitOnErrorsPlugin(),

        /** Extract CSS bundle */
        new ExtractTextPlugin('bundle.css')
    ]
};
