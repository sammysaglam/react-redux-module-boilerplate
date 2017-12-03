const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// get themes
const themes = glob.sync('src/themes/**/*.scss').map(fileName => fileName.replace(/(.+\/)|(\.scss)/g , ''));

// extract text plugins
const extractThemesGenerator = isMinified => themes.map(themeName => new ExtractTextPlugin({
	filename(getPath) {
		return getPath('themes/' + themeName + '/' + themeName + (isMinified ? '.min' : '') + '.css');
	}
}));

module.exports = {
	themes,
	extractThemesGenerator
};