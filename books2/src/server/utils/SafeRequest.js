const fetch = require("node-fetch");
const config = require("../config");
const querystring = require("querystring");

class SafeRequest {
  constructor(url) {
    this.url = url;
    this.baseURL = config.baseURL;
    this.completeURL = this.baseURL + this.url;
  }

  fetch({ data = {}, type = "get", ...config }) {
    let url = this.completeURL;
    if (!url) throw new Error("url is unvalid");
    const params = querystring.stringify(data);
    const method = type.toUpperCase();
    const options = {
      method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(params)
      },
      ...config
    };
    if (method === "GET") {
      url = url + "&" + querystring.stringify(data);
    }
    if (!['GET', 'HEAD'].includes(method)) {
      // get/head 方法不可以有body
      options.body = params;
    }

    const request = fetch(url, options);
    return new Promise((resolve, reject) => {
      let result = {
        status: true,
        message: "",
        data: []
      };
      request
        .then(res => res.json())
        .then(json => {
          result = json;
          resolve(result);
        })
        .catch(error => {
          result.status = false;
          result.message = error.message || "node-fetch和后端通讯异常";
          reject(result);
        });
    });
  }

  get(config = {}) {
    return this.request({ type: "GET", ...config });
  }

  post(config = {}) {
    return this.request({ type: "POST", ...config });
  }
}

module.exports = SafeRequest;
