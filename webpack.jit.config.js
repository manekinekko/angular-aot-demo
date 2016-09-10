'use strict';

const commonConfig = require('./webpack.common.config.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    entry: {
      'app.jit': './app/bootstrap.jit.ts'
    },
    output: {
      path: './dist/jit'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.jit.html',
        inject: false
      })
    ],
    devServer: {
      contentBase: 'dist/jit'
    }
  });
};
