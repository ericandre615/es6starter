'use strict';

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: ["./app/app.jsx"]

  },
  output: {
    path: path.join(__dirname, './public'),
    filename: "bundle.js",
    publicPath:"/"
  },
  devServer: {
    inline: true,
    contentBase: "./public"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          // ?{browsers: ["last 3 versions", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"]}
          'less-loader',
        ],
      }
    ]
  },
};
