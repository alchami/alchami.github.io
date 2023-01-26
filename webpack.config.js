const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            test: /\.html$/i,
            type: 'asset/resource',
            generator: { filename: '[base]'},
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: { filename: '[base]'}
        },

  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new CopyPlugin({patterns: [{from: 'src/assets', to: 'assets'}]}),
    ],
  },
};