/**
 * Created by ashu on 21/3/16.
 */


function one(){
  this.val1 = 'v1';
}

function two(){
  this.val2 = 'v2';
}

two.prototype = new one();

console.log('this is object two' , two)
console.log('this is prototype of object two' , two.prototype)

console.log('this is constructor of object two' , two.prototype.constructor)

  two.prototype.constructor = new two();



//console.log('this is constructor of object two' , two.prototype.constructor)
