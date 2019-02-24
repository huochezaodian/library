/**
 *@fileoverview 实现Index的数据模型
 *@author wangyilong
 */
const SafeRequest = require("../utils/SafeRequest");
/**
 *Index类 获取后台的图书数据
 */
class IndexModel {
  /**
   *Creates an instance of IndexModel.
   * @param {object} app  koa2执行上下文
   * @memberof IndexModel
   */
  constructor(app) {}

  /**
   *获取图书列表
   *
   * @param {object} [params={}]
   * @returns {object}
   * @example
   * getBookList(params = {})
   * @memberof IndexModel
   */
  getBookList(params = {}) {
    const safeRequest = new SafeRequest("library/query");
    return safeRequest.fetch({
      type: "POST",
      data: params
    });
  }
  /**
   *根据图书id获取图书信息
   *
   * @param {string}
   * @returns {object}
   * @example
   * getOneBookById(id)
   * @memberof IndexModel
   */
  getOneBookById(id) {
    const safeRequest = new SafeRequest("library/queryone");
    return safeRequest.fetch({
      type: "GET",
      data: { id }
    });
  }
  /**
   *根据图书id删除图书信息
   *
   * @param {string}
   * @returns {object}
   * @example
   * deleteBookById(id)
   * @memberof IndexModel
   */
  deleteBookById(id) {
    const safeRequest = new SafeRequest("library/delete");
    return safeRequest.fetch({
      type: "GET",
      data: { id }
    });
  }
  /**
   *添加图书
   *
   * @param {object}
   * @returns {object}
   * @example
   * addOneBook(params)
   * @memberof IndexModel
   */
  addOneBook(params) {
    console.log('params', params)
    const safeRequest = new SafeRequest("library/add");
    return safeRequest.fetch({
      type: "POST",
      data: params
    });
  }
  /**
   *编辑图书
   *
   * @param {object}
   * @returns {object}
   * @example
   * editOneBook(params)
   * @memberof IndexModel
   */
  editOneBook(params) {
    const safeRequest = new SafeRequest("library/edit");
    return safeRequest.fetch({
      type: "POST",
      data: params
    });
  }
}

module.exports = IndexModel;
