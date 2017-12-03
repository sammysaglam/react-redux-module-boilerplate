const CopyWebpackPlugin = require('copy-webpack-plugin');

const moduleSettings = require('./module.config');
const defaultTheme = moduleSettings.example.defaultTheme;

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

							fileContents.toString().replace(
								/<\/title>/ ,
								`</title>\n\t\t<link rel="stylesheet" href="../dist/${moduleSettings.library.filename}.css"/>\n\t\t<link rel="stylesheet" href="example.css"/>\n\t\t<link rel="stylesheet" href="../dist/themes/${defaultTheme}/${defaultTheme}.css"/>`
							)
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

module.exports = copyExampleFiles;