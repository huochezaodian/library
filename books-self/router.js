const router = require('koa-simple-router')
const IndexController = require('./controllers/IndexController')
const indexController = new IndexController()

module.exports = app => {
    app.use(router(_ => {
        _.get('/', indexController.actionIndex)
        // 伪静态
        _.get('/index.html', indexController.actionIndex)
        
        _.get('/test', indexController.actionTest)
    }))
}