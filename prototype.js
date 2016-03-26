/**
 * Created by ashu on 17/3/16.
 */
'use strict';
var demo = function (name){
this.name = name;
}

demo.prototype.printName = function (){
  console.log('inherited  ' + this.name);
}

var user  = new demo('ashu');
user.qualification = 'MCA';

user.printName();

console.log(user.prototype);
console.log(demo.prototype);
console.log('fhfhfv' ,JSON.stringify(demo.__proto__));
console.log('fhfhfvvfgggggggggggg' ,user.__proto__);

 function animal(){
  name : 'general'
}
animal.prototype.voice = function(sound){
  if(sound)
  console.log(sound)
  else
  console.log('no sound')
}

//animal.prototype.name = 'general'
function dog (){
return 'xgdj'
}
dog.prototype.voice = function () {
  console.log('bark');
}
function cat() {

}

var inheritsFrom = function (child, parent) {
  child.prototype = Object.create(parent.prototype);
};

inheritsFrom(dog,animal)
inheritsFrom(cat,animal)


var dog1 = new dog();
dog1.voice('bark')

var cat1 = new cat();
cat1.voice('meow');

var animal1 = new animal()
animal1.voice();

console.log(dog1.name)
//console.log(dog1.name1)
var s = new dog();

console.log(JSON.stringify(s));
console.log(dog())

