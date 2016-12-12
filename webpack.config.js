module.exports = {
	entry: {
		main: './app/Mini1.component.js'
	},
	output: {
		filename: 'bundle.js',
		path: './public'
	},
	devtool: 'sourcemap',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
		]
	}
}
