const request = require('../extend/request')

class BookInfo {
  constructor(){
    this.list = []
  }

  async getBookList (params) {
    const response = await request({
      url: 'library/query',
      type: 'post',
      data: params
    })
    return response
  }

  async getOneBookById (id) {
    const response = await request({
      url: 'library/queryone',
      type: 'get',
      data: {id}
    })
    return response
  }

  async deleteBookById (id) {
    const response = await request({
      url: 'library/delete',
      type: 'get',
      data: {id}
    })
    return response
  }

  async addOneBook (params) {
    const response = await request({
      url: 'library/add',
      type: 'post',
      data: params
    })
    return response
  }

  async editOneBook (params) {
    const response = await request({
      url: 'library/edit',
      type: 'post',
      data: params
    })
    return response
  }
}

module.exports = BookInfo