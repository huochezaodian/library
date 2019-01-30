const http = require('http')
const querystring = require('querystring')

function request ({url = '', data = {}, type = 'get', ...config}) {
    return new Promise((resolve, reject) => {
        if (!url) throw new Error('url is unvalid')
        const params = querystring.stringify(data)
        const method = type.toUpperCase()
        if (method === 'GET') url = url + '&' + querystring.stringify(data)
        const options = {
            host: 'localhost',
            port: '80',
            method,
            path: '/github/php-learning/YII-project/basic/web/index.php?r=' + url,
            headers:{  
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(params)
            },
            ...config
        }

        const req = http.request(options, (res) => {
            let body = ''
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                body += chunk
            });
            res.on('end', () => {
                resolve(JSON.parse(body))
            });
        });

        req.on('error', (e) => {
            console.error(`请求遇到问题: ${e.message}`)
            reject(e)
        });

        // 将数据写入请求主体。
        req.write(params);
        req.end();
    }).catch(err => {
        console.log(err)
    })
}

module.exports = request