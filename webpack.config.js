// webpack v4
/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    open: true,
    hot: true
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
            // publicPath: '../'
          }
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            implementation: require("sass")
          }
        }]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    }),
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   hash: true,
    //   template: './src/index.html',
    //   filename: 'index.html'
    // }),
    new WebpackMd5Hash(),
    new StyleLintPlugin({
      configFile: './stylelint.config.js',
      files: './src/css/*.scss'
    })
  ],
  watch: true
};