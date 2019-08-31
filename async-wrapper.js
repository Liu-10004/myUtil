// 假设有一个远程调用，返回一个随机数
// 这是一个模拟代码
function remoteGet(){
  return cb => {
    console.log(cb,'.........')
    setTimeout(() => {
      cb(Math.random())
    }, 10)
  }
}

// 利用asyncWrapper函数解决回调地狱
asyncWrapper( function * () {
  const a = yield remoteGet()
  const b = yield remoteGet()
  console.log(a, b) // 输入两个随机数
})()

//asyncWrapper利用generator函数的性质，利用yield语法，实现了异步变同步的逻辑。程序会在yield gemoteGet()停顿，直到setTimeout执行完成返回结果。

function asyncWrapper(generatorFunction) {
  /// TODO
   const it = generatorFunction();
   return function next(...arg) {
     const nextStep = it.next(...arg);
     console.log(nextStep,next)
     if(!nextStep.done){
       nextStep.value(next);
     }
   }
 }