const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const extractCssGenerator = require('./extractCss');

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
						'./src/Library.scss' ,
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
					}) ,
					exclude:/themes/
				}
			]
		} ,
		externals:{} ,
		plugins:[
			extractCss ,
			new CleanWebpackPlugin('example') ,
			copyExampleFiles(isHotLoaderEnv) ,

			...(isHotLoaderEnv ? [
				new OpenBrowserPlugin({url:'http://localhost:9032'})

			] : [
				new ImageminPlugin(),
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
			])
		]
	});
};

const copyExampleFiles = isHotLoaderEnv => new CopyWebpackPlugin([
	{
		from:{glob:'**/*.+(html|json|png|svg|jpg|jpeg|gif|ttf|woff|eot)'} ,
		context:'src/example' ,
		to:isHotLoaderEnv ? './[path]/[name].[ext]' : '../example/[path]/[name].[ext]' ,
		transform:(fileContents , filepath) => {

			// get file extension
			const fileExt = filepath.split('.').pop().toLowerCase();

			// minify HTML
			switch (fileExt) {
				case 'html':

					// inject css files link tags into head tag
					return (
						isHotLoaderEnv ?

							fileContents

							:

							fileContents.toString().replace(/<\/title>/ , '</title>\n\t\t<link rel="stylesheet" href="../dist/library.css"/>\n\t\t<link rel="stylesheet" href="example.css"/>')
					);

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
});

module.exports = buildExample;