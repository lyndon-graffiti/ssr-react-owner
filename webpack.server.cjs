const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const baseConfig = require("./webpack.base.cjs");
const serverConfig = {
  target: "node",
  entry: "./src/server",
  output: {
    filename: "server.cjs",
    path: path.resolve(__dirname, "dist"),
  },
  externals: [nodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
