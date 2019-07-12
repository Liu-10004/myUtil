function inherit(subTpye,superType){
  subTpye.prototype = Object.create(superType.prototype,{
    constructor:{
      enumerbale:true,
      configurable:true,
      writable:true,
      value:true,
    }
  })
  Object.setPrototypeOf(subType,superType)
}


