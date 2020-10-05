import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()
const recordRouter = new Router({prefix: '/records'})

router.get('/', ctx => {
    ctx.body = 'This is router page.'
})

router.get('/users/:id', ctx => {
    ctx.body = `This is user list page. params: ${ctx.params.id}`
})

recordRouter.get('/:id', ctx => {
    ctx.body = `Record page params: ${ctx.params.id}`
})

app.use(router.routes())
app.use(recordRouter.routes())
// app.use(ctx => {
//   if (ctx.url === '/') {
//     ctx.body = 'This is home page.'
//   } else if (ctx.url === '/users') {
//     if (ctx.method === 'GET') {
//       ctx.body = 'This is user list.'
//     } else if (ctx.method === 'POST') {
//       ctx.body = 'Create a user.'
//     } else {
//       ctx.status = 405;
//     }
//   } else if (ctx.url.match(/\/users\/\w+/)) {
//     const userId = ctx.url.match(/\/users\/(\w+)/)
//     ctx.body = `This is user:${userId && userId[1]}`
//   } else {
//     ctx.body = 'There are nothing.'
//   }
// })

module.exports = app
// module.exports = app
