const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');
const config = require('./webpack.ant.dev.config');

// 压缩版
const minConfig = merge(config, {
  output: {
    filename: 'Tiny.Physics.Ant.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

module.exports = [minConfig, config];
