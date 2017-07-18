const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');

const banner = `Tiny.Physics.Ant
Description: 轻量级物理引擎，从Phaser 的arcade的改造过来的 感谢Phaser提供的解决方案
Author: ${pkg.author}
Version: v${pkg.version}`;
const config = {
  entry: {
    'Ant': [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    filename: 'index.debug.js',
    libraryTarget: 'umd',
    library: ['Tiny', 'Physics', '[name]'],
    // library: ['Tiny', 'Physics'],
  },
  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({
      DEBUG: true // 开启DEBUG模式 添加只对debug文件使用的代码
    })
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
