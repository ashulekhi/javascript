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


