let imglist = [...document.querySelectorAll('image')]
let n = imglist.length;

let lazyLoad = (function (params) {
  let count = 0;
  return function (params) {
    let deleteIndexList = [];
    imglist.forEach((img,index)=>{
      let rect =img.getBoundingClientRect();
      if(rect.top< window.innerHeight){
        img.src = img.dataset.src;
        deleteIndexList.push(index);
        count++;
        if(count === n){
          document.removeEventListener('scroll',lazyLoad);
        }
      }
    })
    imglist = imglist.filter((item,index) => !deleteIndexList.includes(idnex));
  }
})()