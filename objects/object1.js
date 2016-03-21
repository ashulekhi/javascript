/**
 * Created by ashu on 21/3/16.
 */


var myobj = new Object();
myobj.name = 'ashu'
myobj.age ='24'
myobj.job = 'software engineer'

console.log(myobj);

console.log(Object.getOwnPropertyNames(myobj));

for (var i in myobj){
  console.log('printing keys' , i + ' ' +  myobj[i] );
}

var obj = {

  1: 'test',
  key : 'value'
}

var keys = Object.keys(obj);

console.log('keys of object are' , keys)

console.log(obj["1"]);

console.log('ghfhfv',myobj.__proto__);


var a = {
  name : "ashu"
}

console.log(a.__proto__)


