console.log('index.html 初始化完毕')

fetch('/test').then(res => res.json()).then(res => {
    console.log('res:', res)
})