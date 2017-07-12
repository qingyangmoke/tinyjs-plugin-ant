const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
// const merge = require('webpack-merge');

const banner = `${pkg.name}
Description: ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}`;

const config = {
  entry: {
    Physics: [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    filename: 'index.debug.js',
    libraryTarget: 'commonjs',
    library: ['Tiny', '[name]'],
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
  },
};

module.exports = config;
