// const Koa = require('koa')
// const staticFile = require('koa-static')
// const render = require('koa-swig')
// const bodyparser = require('koa-bodyparser')
// const co = require('co')
// const log4js = require('koa-log4')
// const config = require('./config')
import Koa from 'koa'
import staticFile from 'koa-static'
import render from 'koa-swig'
import bodyparser from 'koa-bodyparser'
import co from 'co'
import log4js from 'koa-log4'
import config from './config'
const app = new Koa()

// 中间件引入
const errorHandler = require('./middlewares/errorHandler')
// 请求数据放到body里面
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

//  静态文件
app.use(staticFile(config.staticDir))

// swig 模板配置
app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: config.cacheMode, // disable, set to false
  ext: 'html',
  writeBody: false
}))

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