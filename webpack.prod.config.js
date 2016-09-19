var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Krista Goralczyk\'s Site',
    template: path.join(__dirname, './app/index.html'),
    inject: 'body'
  }), ],
  module: {	
  	loaders: [
	  { 
	  	test: /\.css$/, 
	  	loader: 'style!css',
	  	include: [path.resolve(__dirname, 'app')],
	  	exclude: /node_modules/
	  },
	  {
	  	test: /\.scss$/,
	  	loaders: ["style", "css", "sass"],
	  	include: [path.resolve(__dirname, 'app')],
	  	exclude: /node_modules/
	  },
	  {
	  	test: /\.js$/,
	  	loader: 'babel',
	  	query: {
	  	  presets: ['react', 'es2015', 'stage-0']
	  	}, 
	  	include: [path.resolve(__dirname, 'app')], 
	  	exclude: /node_modules/
	  },
	  {
	  	test: /\.(png|jpg|gif|woff|woff2)$/,
	  	loader: 'url-loader?limit=8192',
	  	include: [path.resolve(__dirname, 'app')],
	  	exclude: /node_modules/
	  },
	  {
	  	test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
	  	loader: "url-loader?mimetype=application/font-woff"
	  },
	  {
	  	test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, 
	  	loader: "file-loader?name=[name].[ext]",
	  	include: [path.resolve(__dirname, 'app')],
	  	exclude: /node_modules/
	  }
  	]
  }
};