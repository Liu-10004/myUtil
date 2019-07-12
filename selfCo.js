//自执行generator函数

const data = "{a:1,b:2}"
const data2 = "{c:3,d:4}"
const data3 = "{e:5,f:6}"

const api = function (data) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })

}

function run (ge){
  let it= ge();
  let result = it.next();
  console.log(result);
  return new Promise((resolve,reject)=>{
    const next = function (result) {
      if(result.done){
        resolve(result.value);
      }
      result.value = Promise.resolve(result.value);
      result.value.then(res => {
        let result = it.next(res)
        next(result)
      }).catch(err=>{
        reject(err)
      })
    }
    next(result)
  })
}

function *func(){
  let res = yield api(data);
  console.log(res)
  let res2 = yield api(data2);
  console.log(res2)
  let res3 = yield api(data3)
  console.log(res3)
}

run(func)