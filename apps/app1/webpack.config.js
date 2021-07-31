const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/index',
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
      filename: 'app1.js',
      remotes: {
        // app2: 'app2@http://localhost:3002/remoteEntry.js'
        app2: 'app2'
      },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
