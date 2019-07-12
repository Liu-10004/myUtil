const selfReduce = function (fn,initialValue) {
  let arr = Array.prototype.slice.call(this);
  let res = initialValue;
  for(let i=0;i<arr.length;i++){
    if(i==0 && !res){
      res = arr[0];
    }else if(res){
      res = fn.call(null,res,arr[i],i,this)
    }
  }

  return res;

}

Array.prototype.selfReduce = selfReduce;

let r= [1,2,3].selfReduce((pre,cur)=>pre*cur,1);

function mu(n,m){
  return 2*n;
}

let res = curry (mu,mu,mu)(2,2)

console.log('res',res)

function curry(...arg){
  return arg.selfReduce((pre,cur,index,ary)=> {
    return (...numbers)=> {
    console.log(...numbers)
    return cur(pre(...numbers))}});
}
