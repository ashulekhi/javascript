/**
 * Created by ashu on 18/3/16.
 */


console.log(name)
console.log(name)
function demo () {
  name = 'tanu';
  console.log(name)
}
var name = 'ashu'
//var name = 'xyz'
console.log(name)
demo();
console.log(name)


var name = function(){

}
console.log(name)


var name = 'kuldeep'

console.log(name)


var name = 'ashu'
{

  var name = 'tanu'
}

console.log(name)


console.log(i)

for (i = 0 ; i<10 ; i++)
{
  console.log(i)
}
function a(){
  var i = 15;
  console.log('inside function' , i)
}

a();
console.log(i)

var i =20;
console.log(i)

console.log(i)



/*var min  = 10;
var max = 100;

function demo(){
  this.min  = 5;
    this.max = 20;
  this.calculate = function(){
    setTimeout(function(){
      console.log(this.min + 'dsd' + this.max)
    } , 2000)
  }
}

var obj = new demo()

  obj.calculate()*/

var min  = 10;
var max = 100;

function demo(){

  console.log('this is so cool' , this);
  this.min  = 5;
  this.max = 20;
  this.calculate = function(){
    setTimeout(function(){
      console.log('this in timeout' , this)
      console.log(min + 'dsd' + max)
    } , 2000)
  }
}

var obj = new demo()

console.log('this outside' ,  this)

obj.calculate()


function trying(name , age){
  name1 : name
  age1 : age
}

var try1 = new trying()
console.log(try1.name1)
console.log(try1.age1)

var obj1 = {
  name:'ashu'
}

console.log(obj1.name);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

console.log(b)
//a();
//console.log(a)
function a(){
  console.log(b)
  var b = 20;
  console.log(b)
}

a();

var b = 10;


console.log('new called ' ,  new demo())
console.log( 'protype' , new demo().prototype);


