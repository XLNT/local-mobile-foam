const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const fetch = require('isomorphic-fetch');

const app = new Koa();
const router = new Router();

router.post('/location', async (ctx, next) => {
  const res = await fetch(`https://map-api-direct.foam.space/signal/map?${new URLSearchParams(ctx.request.body)}&sort=newest`)
  try {
    const data = await res.json();
    // for now, just proxy the response back to the client
    ctx.body = data;
  } catch (error) {
    console.error(error);
  }
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
