function curry(fn){
  // 取出 fn 的参数列表
  if(fn.length<=1) return fn;
  const g =  (...args) => fn.length === args.length ? fn(...args) : (...args2)=>g(...args,...args2)
  return g;
}

let add = (a,b,c,d,e) => a+b+c+d


const curriedAdd = curry(add);

let r = curriedAdd(1,2);
let res = r(3,4,5)
console.log(res);

function curry1(fn,args=[]){
  let len = fn.length;
  return (...arg1)=> {
    args.push(...arg1) 
    if(args.length < len){
      return curry1(fn,args) 
    }else{
       return  fn(...args);
    }
  }
}

//反柯理化函数

let add1 = a=>b=>c=>d=>{
  return a+b+c+d;
}
let rrr = uncurry(add1)(1,2,3,4)
console.log(rrr)
function uncurry(fn){
  return (...arg) => arg.reduce((pre,cur)=>{
    return pre(cur)
  },fn)
  

  // return f()
  return (...arg) =>{
    return fn(arg[0])(arg[1])(arg[2])(arg[3]);
  }
}