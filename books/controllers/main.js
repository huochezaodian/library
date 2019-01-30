const BookInfo = require('./../models/books')
const bookInfo = new BookInfo()
const mainController =  {
  list: async (ctx, next) => {
    const params = ctx.query
    const books = await bookInfo.getBookList(params)
    await ctx.render('index', {
      form: params,
      title: 'list',
      books
    })
  },
  operate: async (ctx, next) => {
    const params = ctx.query
    const book = await bookInfo.getOneBookById(params)
    await ctx.render('operate', {
      title: 'operate',
      book
    })
  },
  login: async (ctx, next) => {
    await ctx.render('login', {
      title: 'login'
    })
  },
}

module.exports = mainController