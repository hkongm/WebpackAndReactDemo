var webpack = require('webpack');

module.exports = {
  entry: {
    router: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/entry.js'
    ],
    // helloworld: [
    //   'webpack-dev-server/client?http://localhost:3000',
    //   'webpack/hot/only-dev-server',
    //   './src/entry.js'
    // ],
    editor: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/editor/entry.js'
    ]
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
        // loader: 'react-hot!jsx-loader?harmony'
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};