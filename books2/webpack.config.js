const merge = require("webpack-merge");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const HtmlAfterWebpackPlugin = require("./config/HtmlAfterWebpcakPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { join } = require("path");

const files = glob.sync("./src/web/views/**/*.entry.js");
const _entry = {};
const _plugins = [];
for (let item of files) {
  if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) === true) {
    const entrykey = RegExp.$1;
    _entry[entrykey] = item;
    const [dist, template] = entrykey.split("-");
    _plugins.push(
      new HtmlWebpackPlugin({
        filename: `views/${dist}/pages/${template}.html`,
        template: `./src/web/views/${dist}/pages/${template}.html`,
        chunks: [entryKey],
        inject: false
      })
    );
  }
}

let baseconfig = {
  entry: _entry,
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/],
        use: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
    ]
  },
  output: {
    path: join(__dirname, "./dist/assets"),
    publicPath: "/",
    filename: "scripts/[name].bundle.js"
  },
  plugin: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      chunkFilename: "styles/[id].css"
    }),
    ..._plugins,
    new HtmlAfterWebpackPlugin()
  ]
};

module.exports = merge(baseconfig, _mergeConfig);
