const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
    ],
        },

  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'}),
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new CopyPlugin({patterns: [{from: 'src/assets', to: 'assets'}]}),
    ],

  devServer: {
    static: {directory: path.join(__dirname, 'dist')},
    watchFiles: ['src/*'],
  },
};