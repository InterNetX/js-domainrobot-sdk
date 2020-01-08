/* global require, module, __dirname*/
var path = require("path");

module.exports = {
  mode: "production",
  entry: {
    build: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "build.js"
  },
  resolveLoader: {
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src")
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval"
};
