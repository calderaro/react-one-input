var webpack = require("webpack");
var path = require("path");
var buildPath = path.resolve(__dirname, "dist");
var nodeModulesPath = path.resolve(__dirname, "node_modules");
//var TransferWebpackPlugin = require("transfer-webpack-plugin");

var config = {
  entry: {
    "app": path.join(__dirname, "./src/app.js"),
    vendors: ["react","react-dom"]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    path: "./dist/",
    filename: '[name].js'
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', "vendors.js"),
    new webpack.optimize.DedupePlugin(),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
    //Moves files
    /*new TransferWebpackPlugin([
     {from: "www"}
     ], path.resolve(__dirname, "src"))*/
  ],
  module: {
    //Loaders to interpret non-vanilla javascript code as well as most other extensions including images and text.
    preLoaders: [
      {
        //Eslint loader
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        include: [path.resolve(__dirname, "src/app")],
        exclude: [nodeModulesPath]
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          
        }
      },
      {
        test: /\.css$/, // Only .css files
        loader: "style!css" // Run both loaders
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  //eslint config options. Part of the eslint-loader package
  eslint: {
    configFile: ".eslintrc"
  },
};

module.exports = config;
