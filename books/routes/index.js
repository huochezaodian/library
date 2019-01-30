const router = require('koa-router')()
const MainController = require('./../controllers/main')
const ProxyController = require('./../controllers/proxy')

// pages
router.get('/list', MainController.list)
router.get('/operate', MainController.operate)
router.get('/login', MainController.login)

// proxy api
router.get('/library/delete', ProxyController.delete)
router.post('/library/add', ProxyController.add)
router.post('/library/edit', ProxyController.edit)

router.redirect('/', '/list')

module.exports = router
