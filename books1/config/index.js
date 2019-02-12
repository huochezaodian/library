const { join } = require("path");
const _ = require("lodash");
const env = process.env.NODE_ENV;

let config = {
  viewDir: join(__dirname, "..", "views"),
  staticDir: join(__dirname, "..", "assets")
};

if (env === "development") {
  const devConfig = {
    port: 3000,
    baseURL: "http://localhost/php-learning/YII-project/basic/web/index.php?r=",
    cacheMode: false,
  };
  config = _.extend(config, devConfig);
}

if (env === "production") {
  const proConfig = {
    port: 8081,
    cacheMode: 'memory',
  };
  config = _.extend(config, proConfig);
}

module.exports = config;
