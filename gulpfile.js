const { src, dest, task, series, parallel } = require("gulp");
const webpack = require("webpack-stream");
const less = require("gulp-less");
const autoprefix = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const minifyCSS = require("gulp-csso");
const gzip = require("gulp-gzip");
const rename = require("gulp-rename");
const clean = require("gulp-clean");
const path = require("path");
const fs = require("fs");
const resolve = (name) => path.resolve(__dirname, name);
const cssPath = "./source/css/min";
const jsPath = "./source/js/min";

task("clean", () => {
	return src([cssPath, jsPath], {
		read: false,
		allowEmpty: true,
	}).pipe(
		clean({
			force: true,
		})
	);
});

task("css", () => {
	const ignoreFiles = ["video"].map((file) => `./source/css/${file}.less`);

	return src("./source/css/*.less", {
		ignore: ignoreFiles,
	})
		.pipe(less())
		.pipe(
			autoprefix({
				overrideBrowserslist: ["> 2%", "last 2 versions", "not ie 6-9"],
				cascade: false,
			})
		)
		.pipe(minifyCSS())
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(dest(cssPath));
});

task("js", () => {
	const getEntryData = () => {
		const ignoreFiles = ["pjax.js", "census.js"];

		try {
			let files = fs.readdirSync("./source/js", "utf-8");
			files = files.filter((file) => {
				return ignoreFiles.length
					? /\.js$/.test(file) && !ignoreFiles.includes(file)
					: /\.js$/.test(file);
			});

			const result = {};
			files.forEach((file) => {
				const fileName = file.replace(/.js$/, "");
				result[fileName] = resolve(`./source/js/${file}`);
			});
			result.utils = resolve("./source/utils/utils.js");

			return result;
		} catch (error) {
			throw new Error(err);
		}
	};

	return webpack({
		mode: "production",
		entry: getEntryData(),
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					include: resolve("source"),
					exclude: resolve("node_modules"),
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			],
		},
		stats: "errors-only",
		output: {
			filename: "[name].min.js",
		},
	})
		.pipe(uglify())
		.pipe(dest(jsPath))
		.pipe(
			gzip({
				threshold: "10kb",
			})
		)
		.pipe(dest(jsPath));
});

task("default", series("clean", parallel("css", "js")));
