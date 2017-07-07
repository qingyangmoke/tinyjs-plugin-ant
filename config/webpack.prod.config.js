const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');

// 压缩版
const minConfig = merge(config, {
  output: {
    filename: 'Tiny.Physics.Full.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

module.exports = minConfig;
