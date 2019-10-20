const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const fetch = require('isomorphic-fetch');

const app = new Koa();
const router = new Router();

router.post('/location', async (ctx, next) => {
  // TODO: API docs don't seem to have the list of POIs that have stake attached to them requesting
  // more details. The goal is for me to be notified when I happen to be nearby a disputed or unknown
  // POI so that I can check it out and contribute.
  const res = await fetch(`https://map-api-direct.foam.space/search/poi?${new URLSearchParams(ctx.request.body)}`)
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
