const selfInstanceof = function (l,r) {
  let left = l.__proto__;
  let right = r.prototype;
  while(1){
    console.log(left)
    if(left=== null){
      return false
    }else if(left === right){
      return true;
    }
    left = left.__proto__;
  }
}

let r = selfInstanceof([],Object)

console.log(r)

let obj = {}
console.log(obj.__proto__ === Object.getPrototypeOf(obj))