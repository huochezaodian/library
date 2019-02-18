# library
## v0
- 简介
1. koa2启动项目，使用ssr
2. 模板使用swig
3. bootstrap样式引入，jquery操作DOM以及ajax请求
4. es6+语法编写js，使用system.js兼容性加载
5. rize + puppeteer 页面测试，mocha 完成 node 接口测试

- 服务端

  使用 [php](https://github.com/huochezaodian/php-learning/tree/master/YII-project/basic) 项目提供接口

## v1
-  优化
1. 添加node的容错处理，编写中间件errorHandle
2. 模板的组件化，提取列表为组件
3. 使用jsdoc，model功能可视化
4. 添加logs，实时监测node日志
5. 添加配置文件，根据环境配置不同
6. 使用babel编译js文件，兼容处理