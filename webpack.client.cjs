const path = require("path");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const baseConfig = require("./webpack.base.cjs");
const clientConfig = {
  entry: "./src/client",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./public"),
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!favicon.ico"],
    }),
  ],
};

module.exports = merge(baseConfig, clientConfig);
