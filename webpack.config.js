// src/index.js default configuration
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

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
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]],
              },
            },
          },
          "sass-loader",
        ], // last is first
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash]-[name][ext]",
        },
      },

      // inline images if less than maxSize, otherwise extract/inlucde in build
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset",
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 50 * 1024,
      //     },
      //   },
      //   generator: {
      //     filename: "images/[hash][name][ext]",
      //   },
      // },

      // inlining images will result in embedded base64 encoded image
      // as the value of the img src
      // src="data:image/png;base64,dsahdkashdaskjd/dsadasdahsk+"
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset/inline",
      //   // generator: {
      //   //   filename: "images/[hash]-[name][ext]",
      //   // },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "./src/images", to: "images" }],
    // }),
    new BundleAnalyzerPlugin(),
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
