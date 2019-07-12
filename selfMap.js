const selfMap = function (fn,context) {
  let arr = Array.prototype.slice.call(this);
  let res = [];
  for(let i=0;i<arr.length;i++){
    res[i] = fn.call(context,arr[i],i,this)
  }
  return res;
}

Array.prototype.selfMap = selfMap;

let r = [1,2,3].selfMap((item,index)=>item*2)
console.log(r)

console.log(Array(4))

const reduceMap = function (fn,context) {
  let arr = Array.prototype.slice.call(this);
  return arr.reduce((pre,cur,index,arr)=>
  // 注意这里千万不能用  push
     pre.concat(fn.call(context,cur,index,this))
  ,[])
}

Array.prototype.reduceMap = reduceMap;

let s = [1,2,3].reduceMap((item,index)=>item*2)
console.log('s',s)
