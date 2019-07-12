const selfCall = function (context,...args) {
  let fn = this;
  context = context ? Object(context) : window ? window: global;
  context.fn = fn;
  let res = obj.fn(...args);
  delete context.fn;
  return res;
}