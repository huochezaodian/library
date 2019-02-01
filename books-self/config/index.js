const { join } = require('path')
const _  = require('lodash')
const env = process.env.NODE_ENV

let config = {
    'viewDir': join(__dirname, '..', 'views'),
    'staticDir': join(__dirname, '..', 'assets'),
}

if (env === 'development') {
    const devConfig = {
        port: 3000
    }
    config = _ .extend(config, devConfig)
}

if (env === 'production') {
    const proConfig = {
        port: 8081
    }
    config = _ .extend(config, proConfig)
}

module.exports = config