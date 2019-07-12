const myBind = function(context,...arg1){
  let that = this;
  function newFn (...arg2) {
    that.apply(this instanceof newFn?this:context,[...arg1,...arg2]);
  }
  newFn.prototype = this.prototype;
  return newFn;
}

