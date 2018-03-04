const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const moduleSettings = require('./module.config');

const buildReduxLibrary = ({ outputPath, isMinified }) => ({
	...(isMinified ? {} : { devtool: 'source-map' }),
	entry: {
		[moduleSettings.reduxLibrary.filename]: `./src/${moduleSettings.library.name}.redux`
	},
	output: {
		path: outputPath,
		filename: `[name]${isMinified ? '.min' : ''}.js`,
		library: `${moduleSettings.reduxLibrary.name}`,
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: isMinified
		? [
				new UglifyJSPlugin({
					uglifyOptions: {
						compress: true,
						output: {
							comments: false
						}
					}
				})
		  ]
		: []
});

module.exports = buildReduxLibrary;
