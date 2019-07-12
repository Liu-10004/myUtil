let fib = function (n) {
  if(n===1 || n===2) return n;
  return fib(n-1)+fib(n-2);
}

const memory = function (fn) {
  let obj = {}
  return function (n) {
    if(!obj[n]) obj[n] = fn(n);
    return obj[n];
  }
}

let res = memory(fib)

console.log(res(8))