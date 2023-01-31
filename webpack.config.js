const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
        {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
    ],
        },

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({filename: '[name].css'}),
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new CopyPlugin({patterns: [{from: 'src/assets', to: 'assets'}]}),
    ],

  devServer: {
    host: '0.0.0.0',
    port: "6969",
    compress: true,
    allowedHosts: ['all'],
    static: {directory: path.join(__dirname, 'dist')},
    watchFiles: ['src/*'],
  },
};