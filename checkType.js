const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);

const type = isType('String');

console.log(type(''))