function curry(fn){
  // 取出 fn 的参数列表
  if(fn.length<=1) return fn;
  const g =  (...args) => fn.length === args.length ? fn(...args) : (...args2)=>g(...args,...args2)
  return g;
}

let add = (a,b,c,d) => a+b+c+d


const curriedAdd = curry(add);

let r = curriedAdd(1)(2)(3)(4)
console.log(r);


const curry1 = (fn,placeholder='_') => {

}

/**
 * 
 * @param {Function} func 一部分求值的函数
 * @param  {...any} args 求值的参数
 * @returns {Function} 求值后的函数
 */
const partialFunc = (func, ...args) => {
  let placeholderNum = 0
  return (...args2) => {
      args2.forEach(arg => {
          let index = args.findIndex(item => item === "_")
          if (index < 0) return
          args[index] = arg
          placeholderNum++
      })
      if (placeholderNum < args2.length) {
          args2 = args2.slice(placeholderNum, args2.length)
      }
      return func.apply(this, [...args, ...args2])
  }
}

const display = (a, b, c, d, e, f, g, h) => [a, b, c, d, e, f, g, h];


let partialDisplay = partialFunc(display, 1, 2)
console.log("partialFunc", partialDisplay(3, 4, 5, 6, 7, 8))


let partialDisplay2 = partialFunc(display, '_', 2, '_')
console.log('partialFunc2', partialDisplay2(1, 3, 4, 5, 6, 7, 8))
