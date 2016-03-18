/**
 * Created by ashu on 17/3/16.
 */


/*var person = 'ashu';
var anotherperson = person;

var person = 'kuldeep';

console.log(person);
console.log(anotherperson);

var person =  anotherperson;

console.log(person);*/


var person  = {name:'ashu'};

var anotherperson = person;

person.name='lekhi';

console.log(person.name)
console.log(person)
console.log(anotherperson.name)
console.log(anotherperson)

var obj = {
  name :'ashu'

}
obj.size = 5;
console.log(obj.name);
console.log(obj.propertyIsEnumerable('size'));


/*var obj = {
  marks : [90,95,96,97,98,99],

  printmarks: function(){
    console.log(this.marks.forEach(function
      console.log(this.marks)
    ))
  }
}


obj.printmarks();*/




/*
var fruit = {

  name : 'apple',
  nativeToLand: ["South America", "Central America"],
  printName : function() {
    console.log("This is " + this.name);
  },
  nativeTo : function(){
    this.nativeToLand.forEach(print);
  }
}

var print  = function(eachCountry){
  console.log("Grown in:" + eachCountry);
}


fruit.printName();
fruit.nativeTo();
*/

/*
var obj  = {
  name:'ashu',
  adrs1 : 'pv 63',
  one:"hello"
}

console.log(obj["name"]);
console.log(obj["adrs" + 1]);
*/


