const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const resolve = (name) => path.resolve(__dirname, name);

module.exports = {
	entry: {
		common: resolve("/source/js/joe.common.js"),
		index: resolve("/source/js/joe.index.js"),
		archives: resolve("/source/js/joe.archives.js"),
		post: resolve("/source/js/joe.post.js"),
		journals: resolve("/source/js/joe.journals.js"),
		leaving: resolve("/source/js/joe.leaving.js"),
		photos: resolve("/source/js/joe.photos.js"),
		utils: resolve("/source/utils/joe.utils.js"),
		// census: resolve("/source/js/joe.census.js"),
		// video: resolve("/source/js/joe.video.js"),
		// custom: resolve("/source/js/joe.custom.js"),
		// pjax: resolve("/source/js/pjax.js"),
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: resolve("source"),
				exclude: resolve("node_modules"),
				options: {
					plugins: ["@babel/plugin-transform-runtime"],
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), "source/js/min")],
		}),
		new CompressionPlugin({
			filename: "[path][base].gz",
			algorithm: "gzip",
			test: /\.js$|\.css$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
	],
	output: {
		path: resolve("source/js/min"),
		filename: "joe.[name].min.js",
		libraryTarget: "umd",
	},
};
