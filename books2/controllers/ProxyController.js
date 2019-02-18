const IndexModel = require("./../models/Index");

class ProxyController {
  constructor() {}

  async actionAdd(ctx, next) {
    const index = new IndexModel();
    const params = ctx.request.body;
    const result = await index.addOneBook(params);
    ctx.body = result;
  }

  async actionEdit(ctx, next) {
    const index = new IndexModel();
    const params = ctx.request.body;
    const result = await index.editOneBook(params);
    ctx.body = result;
  }

  async actionDelete(ctx, next) {
    const index = new IndexModel();
    const params = ctx.query;
    const result = await index.deleteBookById(params.id);
    ctx.body = result;
  }
}

module.exports = ProxyController;
