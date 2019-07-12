const selfFilter = function (fn,context) {
  let arr = Array.prototype.slice.call(this);
  let res = [];
  for(let i=0;i<arr.length;i++){
    fn.call(context,arr[i],i,arr) && res.push(arr[i]);
  }
  return res;
}
Array.prototype.selfFilter = selfFilter;
let r = [1,2,3].selfFilter((item,index)=> item!==1)

console.log(r);

const reduceFilter = function (fn,context) {
  let arr = Array.prototype.slice.call(this);
  return arr.reduce((pre,cur,index)=>
    fn.call(context,cur,index,this)?[...pre,cur]:[...pre]
  ,[])
}

Array.prototype.reduceFilter = reduceFilter;
let s = [1,2,3].reduceFilter((item,index)=> item!==1)
console.log(s)