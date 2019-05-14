const Path = require("path");

const config = {
  entry: {
    Main: [__dirname + '/src/main.js']
  },
  output: {
    path: Path.join(__dirname, 'dist'),
    filename: '[name]-bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [Path.join(__dirname, "/src/")],
        exclude: [/node_modules/, /target/],
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 2,
      minSize: 200000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "Vendor"
        },
      },
    },
  },
};

module.exports = config;