const selfCall = function (context,...args) {
  let fn = this;
  context = context ? Object(context) : window ? window: global;
  context.fn = fn;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}