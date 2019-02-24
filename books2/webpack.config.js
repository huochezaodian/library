const merge = require('webpack-merge');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

const files = glob.sync('./src/web/views/**/*.entry.js');
const _entry = {};
const _plugins = [];
for (let item of files) {
  if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) === true) {
    const entrykey = RegExp.$1;
    _entry[entrykey] = item;
    const [dist, template] = entrykey.split('-');
    _plugins.push(new HtmlWebpackPlugin({
      filename: `views/${dist}/pages/${template}.html`,
      template: `./src/web/views/${dist}/pages/${template}.html`,
      inject: false
    }))
  }
}

module.exports = {
  entry: _entry,
  plugins: _plugins
}