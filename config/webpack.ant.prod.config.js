const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');
const config = require('./webpack.ant.dev.config');

// 压缩版
const minConfig = merge(config, {
  output: {
    filename: 'index.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

// 发布模式设置DEBUG为FALSE
for (var i = minConfig.plugins.length - 1; i >= 0; i--) {
  if (minConfig.plugins[i] instanceof webpack.DefinePlugin) {
    minConfig.plugins[i] = new webpack.DefinePlugin({
      DEBUG: false  // 关闭DEBUG模式 删除只对debug文件使用的代码
    });
  }
}

module.exports = minConfig;
