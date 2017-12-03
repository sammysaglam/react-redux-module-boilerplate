const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const extractCssGenerator = require('./extractCss');
const copyExampleFiles = require('./copyExampleFiles');

const moduleSettings = require('./module.config');
const defaultTheme = moduleSettings.example.defaultTheme;

const buildExample = ({
	outputPath ,
	isHotLoaderEnv

}) => {

	const extractCss = extractCssGenerator(isHotLoaderEnv);

	return ({
		devtool:'source-map' ,
		entry:{
			'example':(isHotLoaderEnv ?
					[
						'babel-polyfill' ,
						'react-hot-loader/patch' ,
						'./src/example/entry' ,
						...(defaultTheme ? [`./src/themes/${defaultTheme}/${defaultTheme}.scss`] : []) ,
						`./src/${moduleSettings.library.name}.scss` ,
						'./src/example/entry.scss'
					] :
					[
						'./src/example/entry' ,
						'./src/example/entry.scss'
					]
			)
		} ,
		output:{
			path:outputPath ,
			filename:'[name].js' ,
			publicPath:'http://localhost:9032/'
		} ,
		devServer:{
			hotOnly:true ,
			contentBase:outputPath ,
			compress:true ,
			port:9032 ,
			host:'localhost' ,
			headers:{
				'Access-Control-Allow-Origin':'*' ,
				'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, PATCH, OPTIONS' ,
				'Access-Control-Allow-Headers':'X-Requested-With, content-type, Authorization'
			}
		} ,
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
					})
				}
			]
		} ,
		externals:{} ,
		plugins:[
			extractCss ,
			new CleanWebpackPlugin('example' , {root:outputPath + '/..'}) ,
			copyExampleFiles(isHotLoaderEnv) ,

			...(isHotLoaderEnv ? [
				new OpenBrowserPlugin({url:'http://localhost:9032'})

			] : [
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
				})
			])
		]
	});
};

module.exports = buildExample;