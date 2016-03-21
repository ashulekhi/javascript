/**
 * Created by ashu on 21/3/16.
 */

var mycar =  function(name,model,owner){
  this.name = name
  this.model = model;
  this.owner = owner;
}

var person = function(name){
  this.name = name;
}
var owner1 = new person('ashu')
var car1 = new mycar('honda' ,2000,owner1 )

console.log(car1)

mycar.prototype.color = 'black';
console.log('prinitng color ' , car1.color);

console.log(Object.getOwnPropertyNames(mycar))


for (var key in mycar){
  if(mycar.hasOwnProperty(key))
  console.log(key)
}for (var key in car1){
  if(car1.hasOwnProperty(key))
  console.log(key)
}


