// src/index.js default configuration
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let production = process.env.NODE_ENV === "production";

let config = {
  entry: ["./src/index", "./src/home"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"],
      //     },
      //   },
      // },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // last is first
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    // liveReload: false,
    watchFiles: ["src/**/*", "index.html"],
    static: "./dist",
  },
};

if (production) {
  config.mode = "production";
  config.devtool = "inline-source-map";
}

module.exports = config;
