const router = require('koa-router')()
const MainController = require('../controllers/mainController')
const ProxyController = require('../controllers/proxyController')

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
