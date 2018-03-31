const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractCssGenerator = require('./extractCss');
const { themes, extractThemesGenerator } = require('./extractThemes');

const moduleSettings = require('./module.config');

const buildLibrary = ({ outputPath, isHotLoaderEnv, isMinified, analyzeBuild }) => {
	const extractCss = extractCssGenerator(isHotLoaderEnv, isMinified);
	const extractThemes = extractThemesGenerator(isHotLoaderEnv, isMinified);

	return {
		...(isMinified ? {} : { devtool: 'source-map' }),
		mode: isMinified ? 'production' : 'development',
		entry: {
			[moduleSettings.library.filename]: [
				...themes.map(themeName => './src/themes/' + themeName + '/' + themeName + '.scss'),
				`./src/${moduleSettings.library.name}.scss`,
				`./src/${moduleSettings.library.name}`,
			],
		},
		output: {
			path: outputPath,
			filename: `[name]${isMinified ? '.min' : ''}.js`,
			library: moduleSettings.library.name,
			libraryTarget: 'umd',
			umdNamedDefine: true,
		},
		externals: {
			react: {
				commonjs: 'react',
				commonjs2: 'react',
				amd: 'react',
				root: 'React',
			},
			'react-dom': {
				commonjs: 'react-dom',
				commonjs2: 'react-dom',
				amd: 'react-dom',
				root: 'ReactDOM',
			},
			'prop-types': {
				commonjs: 'prop-types',
				commonjs2: 'prop-types',
				amd: 'prop-types',
				root: 'PropTypes',
			},
			redux: {
				commonjs: 'redux',
				commonjs2: 'redux',
				amd: 'redux',
				root: 'Redux',
			},
			'react-redux': {
				commonjs: 'react-redux',
				commonjs2: 'react-redux',
				amd: 'react-redux',
				root: 'ReactRedux',
			},
			'redux-thunk': {
				commonjs: 'redux-thunk',
				commonjs2: 'redux-thunk',
				amd: 'redux-thunk',
				root: 'ReduxThunk',
			},
		},
		plugins: [
			...extractThemes,
			extractCss,

			...(isMinified
				? [
						new CleanWebpackPlugin('dist', { root: outputPath + '/..' }),
						new ImageminPlugin(),
						new OptimizeCssAssetsPlugin({
							assetNameRegExp: /\.(scss|css)$/g,
						}),
						new UglifyJSPlugin({
							uglifyOptions: {
								compress: true,
								output: {
									comments: false,
								},
							},
						}),
						...(analyzeBuild
							? [
									new BundleAnalyzerPlugin({
										analyzerMode: 'server',
									}),
							  ]
							: []),
				  ]
				: []),
		],
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif|ttf|woff|eot)$/,
					loader: 'url-loader',
				},
				...themes.map((themeName, index) => ({
					test: new RegExp(themeName + '.scss$'),
					loader: extractThemes[index].extract({
						use: ['css-loader', 'sass-loader'],
						fallback: 'style-loader',
					}),
					include: /themes/,
				})),
				{
					test: /\.(scss|css)$/,
					loader: extractCss.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									// root:'./'
								},
							},
							'sass-loader',
						],
						fallback: 'style-loader',
					}),
					exclude: /themes/,
				},
			],
		},
		resolve: {
			alias: {
				// eslint-disable-next-line no-undef
				'prop-types$': path.join(__dirname, '../node_modules/axe-prop-types'),
			},
		},
	};
};

module.exports = buildLibrary;
