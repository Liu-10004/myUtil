function sort(list){
  let i =7;
  while(i>=0){
    const buckets = Array.from({length:27},()=>[]);
    list.forEach(item => {
      let index = item[i] ? item[i].charCodeAt(0)-96:0;
      buckets[index].push(item);
    });
    list = [].concat(...buckets);
    i--
  }
  return list;
}
console.log(sort(['xyz', 'okr', 'oop', 'ofo', 'abc']))