import Koa from "koa";
import koaBody from "koa-body";

import router from "./routes/router";

let app = new Koa();

app.use(koaBody());

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
