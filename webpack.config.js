var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    // 'webpack/hot/only-dev-server'
    './src/js/app.js'
  ],
  context: __dirname + '/', // defaults to __dirname
  resolve: {
    root: path.join(__dirname),
    alias: {
      assets: 'src/assets',
      js: 'src/js',
      style: 'src/style'
    }
  },
  output: {
    path: './dist',
    publicPath: './dist/', // correlates with public path in server.js
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: ['react-hot', 'jsx-loader', 'babel-loader'] 
      },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      // stolen from https://github.com/petehunt/webpack-howto
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
