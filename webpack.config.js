var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: './src/js/app.js',

  // These seem to break js as well. Maybe something with the inline script?
  // entry: {
  //   app: ['webpack/hot/dev-server', './src/js/app.js']
  // },
  // entry: ['webpack/hot/dev-server', './src/js/app.js'],

  output: {
    path: './dist',
    publicPath: '/dist/', // correlates with public path in server.js
    filename: 'bundle.js'
  },

  context: __dirname + '/', // defaults to __dirname

  resolve: {
    root: path.join(__dirname),
    alias: {
      assets: 'src/assets',
      js: 'src/js',
      components: 'src/js/components',
      style: 'src/style'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: ['jsx-loader', 'babel-loader']
      },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      // stolen from https://github.com/petehunt/webpack-howto
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192' }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  // devServer: {
  //   hot: true,
  //   inline: true, // seems to break js
  //   progress: true,
  //   colors: true,
  //   noInfo: true,
  //   contentBase: "./", // where index.html lives
  // }
};
