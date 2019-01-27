const BookInfo = require('./../models/books')
const bookInfo = new BookInfo()
const mainController =  {
  index: async (ctx, next) => {
    await ctx.render('index', {
      title: 'home',
      books: bookInfo.getBookList()
    })
  },
  list: async (ctx, next) => {
    await ctx.render('index', {
      title: 'list',
      books: bookInfo.getBookList()
    })
  },
  operate: async (ctx, next) => {
    await ctx.render('index', {
      title: 'operate',
      books: bookInfo.getBookList()
    })
  },
  login: async (ctx, next) => {
    await ctx.render('index', {
      title: 'login',
      books: bookInfo.getBookList()
    })
  },
}

module.exports = mainController