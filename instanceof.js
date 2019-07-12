const selfInstanceof = function (l,r) {
  let left = l.__proto__;
  let right = r.prototype;
  while(1){
    if(left=== null){
      return false
    }else if(left === right){
      return true;
    }
    left = left.__proto__;
  }
}

/**
 *  这种写法更优
 * @param {*} l 
 * @param {*} r 
 */
const selfInstance = function (l,r) {
  let left = l.__proto__;
  let right = r.prototype;
  while(left!==right){
    if(left=== null) return false
    left = left.__proto__;
  }
  return true;
}

let r = selfInstance('',Object)

console.log(r)

let obj = {}
console.log(obj.__proto__ === Object.getPrototypeOf(obj))