const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCssGenerator = (isHotLoaderEnv, isMinified = false) =>
	new ExtractTextPlugin({
		filename(getPath) {
			return getPath(`[name]${isMinified ? '.min' : ''}.css`);
		},
		...(isHotLoaderEnv ? { disable: true } : {})
	});

module.exports = extractCssGenerator;
