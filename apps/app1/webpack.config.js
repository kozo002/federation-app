const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: 'http://localhost:3001/'
  },
  devServer: {
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app',
      library: { type: 'var', name: 'app1' },
      remotes: {
        app2: 'app2',
        app3: 'app3'
      },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
