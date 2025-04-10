const path = require("path");

module.exports = {
  entry: "./src/worker.ts",
  output: {
    filename: "worker.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "webworker",
};
