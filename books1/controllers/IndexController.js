const IndexModel = require("./../models/Index");

class IndexController {
  constructor() {}

  async actionIndex(ctx, next) {
    const index = new IndexModel();
    const params = ctx.query;
    const result = await index.getBookList(params);
    //SSR
    ctx.body = await ctx.render("index", {
        form: params,
        title: 'list',
        books: result.books
    });
  }

  async actionOperate(ctx, next) {
    const params = ctx.query;
    let book = [];
    if (params.id) {
      const index = new IndexModel();
      const result = await index.getOneBookById(params.id);
      book = result.book;
    }
    ctx.body = await ctx.render("operate", {
      title: "operate",
      title2: !params.id ? "add" : "edit",
      book: book
    });
  }

  async actionLogin(ctx, next) {
    ctx.body = await ctx.render("login", {
      title: "login"
    });
  }
}

module.exports = IndexController;
