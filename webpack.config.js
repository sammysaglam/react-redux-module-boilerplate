const path = require('path');

const moduleSettings = require('./webpack-config/module.config');

const buildExample = require('./webpack-config/buildExample');
const buildLibrary = require('./webpack-config/buildLibrary');
const buildReduxLibrary = require('./webpack-config/buildRedux');

module.exports = env => {
	const analyzeBuild = env && env.analyze;
	const isHotLoaderEnv = env && env.hot;

	return [
		// build example
		buildExample({
			// eslint-disable-next-line no-undef
			outputPath: path.resolve(__dirname, isHotLoaderEnv ? '' : 'example'),
			isHotLoaderEnv
		}),

		// build library
		...(isHotLoaderEnv
			? []
			: [
					buildLibrary({
						// eslint-disable-next-line no-undef
						outputPath: path.resolve(__dirname, 'dist'),
						isHotLoaderEnv,
						isMinified: false,
						analyzeBuild: false
					})
			  ]),

		// minified library
		...(isHotLoaderEnv
			? []
			: [
					buildLibrary({
						// eslint-disable-next-line no-undef
						outputPath: path.resolve(__dirname, 'dist'),
						isHotLoaderEnv,
						isMinified: true,
						analyzeBuild
					})
			  ]),

		// redux library
		...(moduleSettings.reduxLibrary && !isHotLoaderEnv
			? [
					// build redux library
					buildReduxLibrary({
						// eslint-disable-next-line no-undef
						outputPath: path.resolve(__dirname, 'dist'),
						isMinified: false
					}),

					// minified redux library
					...(isHotLoaderEnv
						? []
						: [
								buildReduxLibrary({
									// eslint-disable-next-line no-undef
									outputPath: path.resolve(__dirname, 'dist'),
									isMinified: true
								})
						  ])
			  ]
			: [])
	];
};
