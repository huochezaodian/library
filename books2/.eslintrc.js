// https://eslint.org/docs/user-guide/configuring

module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    browser: true,
    node: true
  },
  "extends": "eslint:recommended",
  "rules": {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 禁用reject返回错误对象
    "prefer-promise-reject-errors": "off",
    // warning during development
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    // arrow function can not return assignment
    "no-return-assign": "off",
    // arrow function can not return value
    "array-callback-return": "off",
    // 不进行单空行校验
    "no-trailing-spaces": "off",
    // 注释必须有空格
    "spaced-comment": process.env.NODE_ENV === "production" ? "error" : "warn",
    "object-curly-spacing": "off",
    "jsx-a11y/anchor-is-valid": "off"
  }
}
