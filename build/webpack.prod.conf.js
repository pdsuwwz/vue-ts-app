const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const config = require('../src/common/config.ts');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js')
const bundleConfig = require("../bundle-config.json")
const TEM_PATH = './templates';
const resolve = (dir) => path.join(__dirname, '..', dir)

const plugins = [
  new HtmlwebpackPlugin({
    title: 'My first vue app',
    template: path.resolve(TEM_PATH, 'index.html'),
    filename: 'index.html',
    // // 加载dll文件
    vendorJsName: bundleConfig.vendor.js,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: false,
      minifyCSS: true,
      minifyURLs: true,
    },
    inject: true,
  }),
];

const optimization = {
  splitChunks: {
    cacheGroups: {
      common: {
        test: /[\\/]node_modules[\\/]/,
        minSize: 30000,
        maxSize: 512000,
        minChunks: 2,
        chunks: 'all',
        priority: 1
      },
      styles: {
        name: 'style',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      }
    },
  },
  minimizer: [new TerserWebpackPlugin({
    sourceMap: false,
    parallel: true,
    terserOptions: {
      keep_fnames: true,
      output: {
        comments: false,
      },
    },
  })],
};

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization,
  devtool: 'inline',
  devServer: {
    contentBase: [resolve('public'), resolve('vendor')], // 配置多个数据源
    inline: false, // 取消热更新，并且浏览器控制台不产生构建消息
    host: '127.0.0.1',
    port: config.port,
    disableHostCheck: true,
    quiet: true, // 使用 FriendlyErrorsWebpackPlugin ，可设置此选项来关闭控制台不必要的信息
  },
  plugins
});
