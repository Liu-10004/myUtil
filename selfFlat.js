const selfFlat = function (depth=1) {
  let arr = Array.prototype.slice.call(this);
  if(depth==0) return this;
  return arr.reduce((pre,cur)=>
    Array.isArray(cur)?[...pre,...selfFlat.call(cur,depth-1)]:[...pre,cur]
  ,[])
}

Array.prototype.selfFlat = selfFlat;

let res = [1,2,3,[4,5,6,[7,8]]].selfFlat();
console.log(res);