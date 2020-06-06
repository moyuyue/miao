const { resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.js',
		path: resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.(jpeg|png|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 8 * 1024,
					esModule: false
				}
			},
			{
				test: /\.html$/,
			    loader: 'html-loader'
			},
			{
				exclude: /\.(js|css|html|jpeg|png|gif)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		})
	],
	mode: 'development',
	//mode: 'production'
}