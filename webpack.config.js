const path = require("path");
const resolve = (name) => path.resolve(__dirname, name);

module.exports = {
  entry: {
    common: resolve("/source/js/joe.common.js"),
    index: resolve("/source/js/joe.index.js"),
    post: resolve("/source/js/joe.post.js"),
    leaving: resolve("/source/js/joe.leaving.js"),
    census: resolve("/source/js/joe.census.js"),
    short: resolve("/source/js/joe.short.js"),
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
  output: {
    path: resolve("source/js/min"),
    filename: "joe.[name].min.js",
    libraryTarget: "umd",
  },
};
