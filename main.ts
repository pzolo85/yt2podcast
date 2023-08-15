import conf from "./config.ts";

if (!conf) Deno.exit(2);

console.log("... Starting");
console.log(conf);
