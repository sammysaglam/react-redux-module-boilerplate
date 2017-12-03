const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractCssGenerator = require('./extractCss');
const {themes , extractThemesGenerator} = require('./extractThemes');

const buildLibrary = ({
	outputPath ,
	isHotLoaderEnv ,
	isMinified ,
	analyzeBuild

}) => {

	const extractCss = extractCssGenerator(isHotLoaderEnv , isMinified);
	const extractThemes = extractThemesGenerator(isMinified);

	return ({
		...(isMinified ? {} : {devtool:'source-map'}) ,
		entry:{
			'library':[
				...(themes.map(themeName => './src/themes/' + themeName + '/' + themeName + '.scss')) ,
				'./src/Library' ,
				'./src/Library.scss'
			]
		} ,
		output:{
			path:outputPath ,
			filename:`[name]${isMinified ? '.min' : ''}.js` ,
			libraryExport:'default' ,
			library:'Library' ,
			libraryTarget:'umd'
		} ,
		plugins:[
			...extractThemes ,
			extractCss ,

			...(isMinified ? [
				new CleanWebpackPlugin('dist' , {root:outputPath + '/..'}) ,
				new ImageminPlugin() ,
				new OptimizeCssAssetsPlugin({
					assetNameRegExp:/\.(scss|css)$/g
				}) ,
				new UglifyJSPlugin({
					uglifyOptions:{
						compress:true ,
						output:{
							comments:false
						}
					}
				}) ,
				...(analyzeBuild ? [
					new BundleAnalyzerPlugin({
						analyzerMode:'server'
					})
				] : [])
			] : [])

		] ,
		module:{
			rules:[
				{
					test:/\.js$/ ,
					loader:'babel-loader' ,
					exclude:/node_modules/
				} ,
				{
					test:/\.(png|svg|jpg|jpeg|gif|ttf|woff|eot)$/ ,
					loader:'url-loader'
				} ,
				...(themes.map((themeName , index) => ({
					test:new RegExp(themeName + '.scss$') ,
					loader:extractThemes[index].extract([
						'css-loader' ,
						'sass-loader'
					])
				}))) ,
				{
					test:/\.(scss|css)$/ ,
					loader:extractCss.extract({
						use:[
							{
								loader:'css-loader' ,
								options:{
									// root:'./'
								}
							} ,
							'sass-loader'
						] ,
						fallback:'style-loader'
					}) ,
					exclude:/themes/
				}
			]
		}
	});
};

module.exports = buildLibrary;