const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const fetch = require('isomorphic-fetch');
const BN = require('bn.js');

const app = new Koa();
const router = new Router();

router.post('/location', async (ctx, next) => {
  const res = await fetch(`https://map-api-direct.foam.space/signal/map?${new URLSearchParams(ctx.request.body)}&sort=newest`)
  // sort by stake
  try {
    const data = await res.json();
    // for now, just proxy the response back to the client
    const sorted = data.sort((a, b) => new BN(a.stake.slice(2), 16).gte(new BN(b.stake.slice(2), 16)));
    const first = sorted[0];
    ctx.body = first;
  } catch (error) {
    console.error(error);
  }
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
