const errorHandle = {
    error (app, logger) {
        app.use(async (ctx, next) => {
            // 容错处理，执行代码出错，会捕获到这里并打印日志
            try {
                await next()
            } catch (error) {
                logger.error(error)
                ctx.status = 500
                ctx.body = error.stack
            }
        }),
        app.use(async (ctx, next) => {
            await next() // 先执行请求
            if(ctx.status !== 404) return

            // 404 处理，由于百度降权不接收404，进行seo优化
            ctx.status = 200
            ctx.body = await ctx.render('error/404')
        })
    }
}

module.exports = errorHandle