const selfMap = function (fn,context) {
  let arr = Array.prototype.slice.call(this);
  let res = false;
  for(let i=0;i<arr.length;i++){
    res = fn.call(context,arr[i],i,this);
    if(res) return true;
  }
  return false;
}

Array.prototype.selfMap = selfMap;
let r = [9,8,67,5,4,3].selfMap((item,index)=>item>9)
let s = [9,8,67,5,4,3].selfMap((item,index)=>item<3)
console.log(r,s)
