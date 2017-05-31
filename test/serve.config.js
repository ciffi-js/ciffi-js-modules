/*
 *
 * replace _indexUrl variable with your development index page
 *
 * */
var _indexUrl = 'http://localhost:8080';

var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		main: './src/scripts/main.js'
	},
	output: {
		path: __dirname + '/' + '../static',
		filename: '[name].js'
	},
	devtool: 'eval',
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: __dirname + '/' + './node_modules',
				options: {
					configFile: './.eslintrc'
				}
			},
			{
				test: /\.twig$/,
				loader: 'twig-loader'
			}
		]
	},
	plugins: [
		new OpenBrowserPlugin({
			url: _indexUrl
		})
	]
};