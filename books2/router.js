const router = require("koa-simple-router");
const IndexController = require("./controllers/IndexController");
const indexController = new IndexController();
const ProxyController = require("./controllers/ProxyController");
const proxyController = new ProxyController();

module.exports = app => {
  app.use(
    router(_ => {
      _.get("/", indexController.actionIndex);
      // 伪静态
      _.get("/index.html", indexController.actionIndex);
      _.get("/list", indexController.actionIndex);
      _.get("/operate", indexController.actionOperate);
      _.get("/login", indexController.actionLogin);
      _.post("/library/add", proxyController.actionAdd);
      _.post("/library/edit", proxyController.actionEdit);
      _.get("/library/delete", proxyController.actionDelete);
    })
  );
};
