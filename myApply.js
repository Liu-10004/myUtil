Function.prototpe.apply = function (context,ary) {
  context = context ? Object(context) : window ? window: global;
  context.fn = this;
  if(!arr){
    return context.fn();
  }
  let r = context.fn(...ary);
  delete context.fn
  return r;
}