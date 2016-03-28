/**
 * Created by ashu on 28/3/16.
 */
//'use strict'

var person = {
  name : 'ashu',
  greeting: function(){
    console.log('hello  ' + this.name)
    //return "hello " + this.name
  }
}


//person.greeting();

var greet  = person.greeting;

//console.log(greet);
console.log(greet)

person.greeting();


var Dog = {
  name: "Alfred",
  greeting: person.greeting
}

Dog.greeting();

var obj = {
  name: 'test'
}

obj.greeting  = person.greeting


obj.greeting();



