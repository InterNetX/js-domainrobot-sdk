/* global require, module, __dirname*/
var path = require("path");
var glob = require("glob");

module.exports = {
  mode: "production",
  //   entry: {
  //     build: glob.sync("./tests/Specs/*.js")
  //   },
  entry: glob.sync("./tests/Specs/*.js").reduce(function(obj, el) {
    obj[path.parse(el).name] = el;
    return obj;
  }, {}),
  output: {
    path: path.resolve(__dirname, "tests/Tests"),
    publicPath: "tests/Tests",
    filename: "[name].js"
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
