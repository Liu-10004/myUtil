function run (ge){
  let it= ge();
  let result = it.next();
  return new Promise((resolve,reject)=>{
    const next = function (result) {
      if(result.done){
        resolve(result.value);
      }
      result.value = Promise.resolve(result.value);
      result.value.then(res => {
        let result = it.next(res)
        next(result)
      })
      .catch(err=>{
        reject(err)
      })
    }
    next(result)
  })
}

function *func(){
  let res = yield api(data);
  let res2 = yield api(data2);
  let res3 = yield api(data3)
}

run(func)