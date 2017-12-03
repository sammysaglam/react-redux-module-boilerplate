const path = require('path');

const buildExample = require('./webpack-config/buildExample');
const buildLibrary = require('./webpack-config/buildLibrary');
const buildReduxLibrary = require('./webpack-config/buildRedux');

module.exports = env => {

	const analyzeBuild = env && env.analyze;
	const isHotLoaderEnv = env && env.hot;

	return [

		// build example
		buildExample({
			outputPath:path.resolve(__dirname , isHotLoaderEnv ? '' : 'example') ,
			isHotLoaderEnv
		}) ,


		// build library
		buildLibrary({
			outputPath:path.resolve(__dirname , 'dist') ,
			isHotLoaderEnv ,
			isMinified:false ,
			analyzeBuild
		}) ,

		// minified library
		...(isHotLoaderEnv ? [] : [
			buildLibrary({
				outputPath:path.resolve(__dirname , 'dist') ,
				isHotLoaderEnv ,
				isMinified:true ,
				analyzeBuild
			})
		]) ,


		// build redux library
		buildReduxLibrary({
			outputPath:path.resolve(__dirname , 'dist') ,
			isMinified:false
		}) ,

		// minified redux library
		...(isHotLoaderEnv ? [] : [
			buildReduxLibrary({
				outputPath:path.resolve(__dirname , 'dist') ,
				isMinified:true
			})
		])
	];
};