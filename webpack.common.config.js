'use strict';
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');

module.exports = function() {
  return {

    debug: false,
    profile: true,
    bail: false,

    entry: {
      polyfills: [
        path.resolve(__dirname, 'node_modules/es6-shim/es6-shim.min.js'),
        path.resolve(__dirname, 'node_modules/es6-promise/dist/es6-promise.min.js'),
        path.resolve(__dirname, 'node_modules/reflect-metadata/Reflect.js'),
        path.resolve(__dirname, 'node_modules/zone.js/dist/zone.min.js'),
        path.resolve(__dirname, 'node_modules/zone.js/dist/long-stack-trace-zone.min.js')
      ]
    },

    output: {
      filename: '[name].bundle.js'
    },

    module: {
      loaders: [
        {
          test: /\.ts$/,
          loaders: ['angular2-template-loader', 'awesome-typescript-loader'],
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        {
          test: /\.(html|css)$/,
          loader: 'raw-loader',
          exclude: ['app/index.html']
        }
      ]
    },

    resolve: {
      root: [ path.resolve(__dirname, 'app') ],
      extensions: ['', '.ts', '.js']
    },

    plugins: [
      // new DashboardPlugin({ port: 3001 })
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      }),
      new CompressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
      })
    ],

    devtool: false,

   devServer: {
     compress: true
   }

  };
}
