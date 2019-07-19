/**
 * 
 * @param {*} fn 
 * @param {*} time 
 */

let obj = {};

function mySetInterval(fn,time){
  let timeId = 'id'
  // 这里始终维护着 obj[timeId]
  obj[timeId] = setTimeout(() => {
    fn();
    mySetInterval(fn,time);
  }, time)
  
  return timeId;
}

function myClearInterval(key){
    clearTimeout(obj[key]);
}

let myTimer = mySetInterval(function(){
  console.log(1)
},100)

setTimeout(function(){
  myClearInterval(myTimer)
},1000)
