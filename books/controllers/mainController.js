const BookInfo = require('../models/books')
const bookInfo = new BookInfo()
const mainController =  {
  list: async (ctx, next) => {
    const params = ctx.query
    const result = await bookInfo.getBookList(params)
    await ctx.render('index', {
      form: params,
      title: 'list',
      books: result.books
    })
  },
  operate: async (ctx, next) => {
    const params = ctx.query
    let book = []
    if (params.id) {
      const result = await bookInfo.getOneBookById(params.id)
      book = result.book
    }
    await ctx.render('operate', {
      title: 'operate',
      title2: !params.id ? 'add' : 'edit',
      book: book
    })
  },
  login: async (ctx, next) => {
    await ctx.render('login', {
      title: 'login'
    })
  },
}

module.exports = mainController