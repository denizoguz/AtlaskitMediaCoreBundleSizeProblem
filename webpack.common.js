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
        // exclude: [/node_modules/, /target/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', "sass-loader"]
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 50
        }
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