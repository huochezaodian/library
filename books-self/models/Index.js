/**
 *@fileoverview 实现Index的数据模型
 *@author wangyilong
 */
 const request = require('../utils/request')
 /** 
 *Index类 获取后台的图书数据 
 */
class IndexModel {
    /**
     *Creates an instance of IndexModel.
     * @param {object} app  koa2执行上下文
     * @memberof IndexModel
     */
    constructor (app) {}

    /**
     *获取数据
     *
     * @param {string} [id='']
     * @returns {object}
     * @example
     * getData(id)
     * @memberof IndexModel
     */
    getData (id = '') {
        return {
            data: 'hello word!!!!'
        }
    }
}

module.exports = IndexModel