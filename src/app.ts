import Koa from 'koa'

const app = new Koa()

app.use(ctx => {
  if (ctx.url === '/') {
    ctx.body = 'This is home page.'
  } else if (ctx.url === '/users') {
    if (ctx.method === 'GET') {
      ctx.body = 'This is user list.'
    } else if (ctx.method === 'POST') {
      ctx.body = 'Create a user.'
    } else {
      ctx.status = 405;
    }
  } else if (ctx.url.match(/\/users\/\w+/)) {
    const userId = ctx.url.match(/\/users\/(\w+)/)
    ctx.body = `This is user:${userId && userId[1]}`
  } else {
    ctx.body = 'There are nothing.'
  }
})

app.listen(3000)
// module.exports = app