import { dbg } from "/options.ts";
// import { format } from "/std/datetime/mod.ts";

function _log(msg: string, level: string, style: string, obj?: unknown) {
  console.log(
    `%c${
      JSON.stringify({ time: new Date().toISOString(), level, msg, data: obj })
    }`,
    style,
  );
}
function debug(msg: string, obj?: unknown) {
  if (dbg) _log(msg, "debug", "color: gray", obj);
}
function info(msg: string, obj?: unknown) {
  _log(msg, "info", "color: white", obj);
}
function error(msg: string, obj?: unknown) {
  _log(msg, "error", "color: red", obj);
}
export { debug, error, info };
