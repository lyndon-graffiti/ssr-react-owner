const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  devtool: "source-map",
  target: "node",
  watch: true,
  entry: "./src/server",
  output: {
    filename: "server.cjs",
    path: path.resolve(__dirname, "dist"),
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
