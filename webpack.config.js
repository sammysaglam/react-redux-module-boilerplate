const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLMinifier = require('html-minifier');
const jsonminify = require('jsonminify');
const glob = require('glob');
const isProduction = process.argv.indexOf('-p') !== -1;

const librarySettings = require('./library.json');

const themes = glob.sync('src/themes/**/*.scss').map(fileName => fileName.replace(/(.+\/)|(\.scss)/g , ''));

const themeExtractors = themes.map(themeName => new ExtractTextPlugin({
	filename(getPath) {
		return getPath('themes/' + themeName + '/' + themeName + (isProduction ? '.min' : '') + '.css');
	}
}));

const extractCSS = new ExtractTextPlugin({
	filename(getPath) {
		return getPath('[name]' + (isProduction ? '.min' : '') + '.css');
	}
});

const plugins = [
	...themeExtractors ,
	extractCSS ,
	...(isProduction ? [] : [new CleanWebpackPlugin('dist')]) ,
	new ExtractTextPlugin('style.css') ,
	new CopyWebpackPlugin([
		{
			from:{glob:'**/*.+(html|json|png|svg|jpg|jpeg|gif|ttf|woff)'} ,
			context:'src' ,
			to:'[path]/[name].[ext]' ,
			transform:(fileContents , filepath) => {

				// do not process fileContents if dev mode
				if ( !isProduction ) {
					return fileContents;
				}

				// get file extension
				const fileExt = filepath.split('.').pop().toLowerCase();

				// minify HTML
				switch (fileExt) {
					case 'html':
						return HTMLMinifier.minify(fileContents.toString() , {
							collapseWhitespace:true ,
							collapseInlineTagWhitespace:true ,
							minifyCSS:true ,
							minifyJS:true ,
							removeComments:true ,
							removeRedundantAttributes:true
						});
					case 'json':
						return jsonminify(fileContents.toString());

					default:
						return fileContents;

				}

			}
		}
	] , {
		ignore:[
			{glob:'**/_*/**'} ,
			{glob:'**/_*'}
		]
	})
];
if ( isProduction ) {
	plugins.push(new UglifyJSPlugin({
		compress:true ,
		comments:false
	}));
}

const baseConfig = {
	externals:{
		'react':'React' ,
		'prop-types':'PropTypes'
	} ,
	module:{
		rules:[
			{
				test:/\.(png|svg|jpg|jpeg|gif|ttf|woff)$/ ,
				loader:'url-loader'
			} ,
			{
				test:/\.(js|jsx)$/ ,
				loader:'babel-loader' ,
				exclude:/node_modules/
			} ,
			...(themes.map((themeName , index) => ({
				test:new RegExp(themeName + '.scss$') ,
				loader:themeExtractors[index].extract([
					'css-loader' ,
					'sass-loader'
				])
			}))) ,
			{
				test:/\.(scss)$/ ,
				loader:extractCSS.extract([
					'css-loader' ,
					'sass-loader'
				]) ,
				exclude:/themes/
			}
		]
	} ,
	plugins
};

const generateOutputConfig = libraryName => ({
	path:path.resolve('./dist') ,
	filename:'[name]' + (isProduction ? '.min' : '') + '.js' ,
	libraryTarget:'var' ,
	library:libraryName
});

const LibraryConfig = Object.assign({} , baseConfig , {
	entry:{
		[librarySettings.library.outputFilename]:[
			...(themes.map(themeName => './src/themes/' + themeName + '/' + themeName + '.scss')) ,
			...(librarySettings.library.scssEntry ? ['./src/' + librarySettings.library.scssEntry + '.scss'] : []) ,
			'./index.js'
		]
	} ,
	output:generateOutputConfig(librarySettings.library.name)
});

let webpackConfig = [LibraryConfig];

if ( librarySettings.redux ) {
	webpackConfig = [
		...webpackConfig ,
		Object.assign({} , baseConfig , {
			entry:{
				[librarySettings.redux.outputFilename]:[librarySettings.redux.entryPath]
			} ,
			output:generateOutputConfig(librarySettings.redux.name)
		})
	]
}

module.exports = webpackConfig;