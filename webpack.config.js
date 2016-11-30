var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devServer: {
  	contentBase: './app/',
  	port: 5001,
  	hot: true
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin({
    title: 'Reactjs Sandbox',
    template: path.join(__dirname, './app/index.html'),
    inject: 'body'
  }), ],
  module: {
  	loaders: [
	  { 
	  	test: /\.css$/, 
	  	loader: 'style!css'
	  },
	  {
	  	test: /\.scss$/,
      loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
	  	// loaders: ["style", "css", "sass"]
	  },
	  {
	  	test: /\.js$/,
	  	loader: 'babel',
	  	query: {
	  	  presets: ['react', 'es2015', 'stage-0']
	  	}
	  },
	  {
	  	test: /\.(png|jpg|gif|woff|woff2)$/,
	  	loader: 'url-loader?limit=8192'
	  },
	  {
	  	test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
	  	loader: "url-loader?mimetype=application/font-woff"
	  },
	  {
	  	test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, 
	  	loader: "file-loader?name=[name].[ext]"
	  }
  	]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./app/stylesheets")
    ]
  }
};

