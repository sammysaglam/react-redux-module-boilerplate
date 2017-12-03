const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const buildReduxLibrary = ({
	outputPath ,
	isMinified

}) => ({
	...(isMinified ? {} : {devtool:'source-map'}) ,
	entry:{
		'library-redux':'./src/Library.redux'
	} ,
	output:{
		path:outputPath ,
		filename:`[name]${isMinified ? '.min' : ''}.js` ,
		library:'LibraryRedux' ,
		libraryTarget:'umd'
	} ,
	module:{
		rules:[
			{
				test:/\.js$/ ,
				loader:'babel-loader' ,
				exclude:/node_modules/
			}
		]
	} ,
	plugins:isMinified ? [
		new UglifyJSPlugin({
			uglifyOptions:{
				compress:true ,
				output:{
					comments:false
				}
			}
		})
	] : []
});

module.exports = buildReduxLibrary;