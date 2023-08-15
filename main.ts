import conf from "./config.ts";
import { debug, error, warn } from "./lib/logger.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

warn("Starting...");
if (!conf) {
  error("The configuration is not valid.");
  Deno.exit(2);
}
debug("config", conf);

const app = new Application();

app.use(async (ctx, next) => {
  warn("before", ctx.request.url);
  await next();
  warn("after", ctx.request.headers);
});

app.use((ctx) => {
  ctx.response.body = "hi";
});

await app.listen({ port: conf.port });
