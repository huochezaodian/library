class IndexController {
    constructor(){}

    async actionIndex (ctx, next) {
        ctx.body = await ctx.render('index', {
            data: 'hello word!'
        })
    }

    async actionTest (ctx, next) {
        ctx.body = {
            test: 'hello word!'
        }
    }
}

module.exports = IndexController