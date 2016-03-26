/**
* Created by ashu on 21/3/16.
*//*



var fun = function(name){
  this.name = name
}
var fun1 = new fun('ashu')

var getprotoype = Object.getPrototypeOf(fun1);
fun.prototype.test = 'test';

console.log('checking protoype' , getprotoype);

var obj = {
  name:'ashu'
}

console.log(obj.__proto__)

console.log(obj.prototype);

function a(){
  this.name = 'ashu'
}

function b(){
  this.lname = 'lekhi'
}

a.prototype.name = null
b.prototype = a.prototype;

var c = new b();

console.log('fullname' ,c.name + c.lname);

*/
/*
var obj = {
  fname : 'ashu'

}

var obj1 = {
  lname: 'lekhi'
}
*//*



function d(){
  mname ='sahab'
}

d.prototype = b.prototype;

var final =  new d();
console.log(d.lname);
*/


/*
function one(){
 this.val1 = 'valiue1'
}
function two(){
 this.val2 = 'valiue2'
}
function three(){
 this.val3 = 'valiue3'
}


two.prototype =  new one();
three.prototype = new two();

var final = new three();
console.log( two)
console.log(three)
console.log (final.val1 +'df' +  final.val2 +'dfgfg' + final.val3);
*/


var animal = {
  eats : 'true'
}

var rabbit = {
  runsfast :'true'
}

var horse = {

}

rabbit.__proto__ = animal;
horse.__proto__ = rabbit;
console.log(rabbit.eats);

console.log(horse.eats);
