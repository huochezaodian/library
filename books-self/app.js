const Koa = require('koa')
const static = require('koa-static')
const render = require('koa-swig')
const path = require('path')
const co = require('co')
const log4js = require('koa-log4')
const config = require('./config')
const app = new Koa()

// 中间件引入
const errorHandler = require('./middlewares/errorHandler')

//  静态文件
app.use(static(config.staticDir))

// swig 模板配置
app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));

// log 配置
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
})
const logger = log4js.getLogger('cheese')

// 404、405等响应 拦截
errorHandler.error(app, logger)

// 注入路由
require('./router')(app)

app.listen(config.port, () => {
  console.log('服务已启动')
})