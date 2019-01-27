const router = require('koa-router')()
const MainController = require('./../controllers/main')

router.get('/', MainController.index)

router.get('/list', MainController.list)

router.get('/operate', MainController.operate)

router.get('/login', MainController.login)

module.exports = router
