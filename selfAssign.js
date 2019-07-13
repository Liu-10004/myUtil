const selfAssgin = function (target,...args) {

  return args.reduce((pre,cur)=>{
    return {...pre,...cur}
  },target)

}

let r = selfAssgin({},{a:1},{b:2})
console.log(r)
