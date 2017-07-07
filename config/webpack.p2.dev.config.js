const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');

const banner = `Tiny.Physics.P2
Description: P2物理引擎，从Phaser的p2的改造过来的 感谢Phaser提供的解决方案
Author: ${pkg.author}
Version: v${pkg.version}`;

const config = {
  entry: {
    'P2': [path.resolve(__dirname, '../src/p2/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    filename: 'Tiny.Physics.P2.debug.js',
    libraryTarget: 'umd',
    library: ['Tiny', 'Physics', '[name]'],
  },
  plugins: [
    new webpack.BannerPlugin(banner),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
    // noParse: /src\/p2\/p2.js/
  },
};

module.exports = config;
