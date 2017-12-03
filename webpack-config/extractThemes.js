const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// get themes
const themes = glob.sync('src/themes/**/*.scss').map(fileName => fileName.replace(/(.+\/)|(\.scss)/g , ''));

// extract text plugins
const extractThemesGenerator = (isHotLoaderEnv , isMinified = false) => themes.map(themeName => new ExtractTextPlugin({
	filename(getPath) {
		return getPath('themes/' + themeName + '/' + themeName + (isMinified ? '.min' : '') + '.css');
	} ,
	...(isHotLoaderEnv ? {disable:true} : {})
}));

module.exports = {
	themes,
	extractThemesGenerator
};