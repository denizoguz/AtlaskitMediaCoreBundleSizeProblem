const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  devtool: 'none',
  mode: 'development',
  plugins: [
    new BundleAnalyzerPlugin({analyzerPort: 9876}),
  ]
};

module.exports = merge(common, config);