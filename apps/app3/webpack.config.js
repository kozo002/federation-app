const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const webpack = require('webpack')
const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3003/'
  },
  devServer: {
    port: 3003
  },
  devtool: 'source-map',
  mode: env,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      vue: '@vue/runtime-dom'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ModuleFederationPlugin({
      name: 'app3',
      library: { type: 'var', name: 'app3' },
      filename: 'app3RemoteEntry.js',
      remotes: {
        app3: 'app3'
      },
      exposes: {
        './hello': './src/hello'
      },
      shared: ['vue']
    }),
  ]
}
