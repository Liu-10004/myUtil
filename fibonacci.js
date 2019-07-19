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


// 动态规划
function fib1(n){
  let a = 1,b=1;
  for(let i=2;i<=n;i++){
    [b,a] = [a+b,b]
  }
  return b;
}


// 尾递归
// 尾递归 ，可以简单的将尾递归改写成循环，所以编译器通常会用循环对尾递归进行优化。
// 尾递归的函数调用发生在 最后返回的时候
function fib2(n,a=1,b=1){
  if(n <= 1) return b
  return fib2(n-1,b,a+b)
}



function fib3(n,f=1){
  while(true){
    if(n===0) return f;
    [n,f] = [n-1,f*n]
  }
}


let res = memory(fib)
let res1 = fib1(8)
let res2 = fib2(8)
let res3 = fib2(8)

console.log(res(8))
console.log(res1)
console.log(res2)
console.log(res3)
