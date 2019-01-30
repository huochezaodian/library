const BookInfo = require('./../models/books')
const bookInfo = new BookInfo()
const proxyController =  {
  delete: async (ctx, next) => {
    const params = ctx.query
    const result = await bookInfo.deleteBookById(params)
    ctx.body = result
  },
  add: async (ctx, next) => {
    const params = ctx.request.body
    const result = await bookInfo.addOneBook(params)
    ctx.body = result
  },
  edit: async (ctx, next) => {
    const params = ctx.request.body
    const result = await bookInfo.editOneBook(params)
    ctx.body = result
  },
}

module.exports = proxyController