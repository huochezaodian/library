class BookInfo {
  constructor(){
    this.list = [{name:'test', id: 'test', price: 'test', type: 'js', pages: 'test'},{name:'test', id: 'test', price: 'test', type: 'html', pages: 'test'}]
  }

  getBookList () {
    return this.list
  }

  getOneBookById (id) {
    return this.list[0]
  }

  queryBooks (params) {
    return this.list[1]
  }

  deleteBookById (id) {
    return {
      statu: true
    }
  }

  addOneBook (params) {
    return {
      statu: 'true'
    }
  }

  editOneBook (params) {
    return {
      statu: 'true'
    }
  }
}

module.exports = BookInfo