/**
 * Created by ashu on 26/3/16.
 */
'use strict'

/*
function whatisthis(){
  //return this
  console.log('dfdfdfdfdf', this)
  console.log( 'checking this in function ' , this === global);


}

console.log(whatisthis());

//console.log(whatisthis());

console.log( 'checking this ' , this);


//console.log('this is global' , global);
*/



/*
var a  = {
  name : 'ashu',
  getContext : function (){
    return this
  }
}

console.log(a.getContext());

var b = {name : 'ashu1'
}

b.getContext = a.getContext

console.log(b.getContext());

var test = a.getContext;

console.log(test());
*/


function person(name) {
this.name = name;
  this.context = this;

}


var person1 = new person('ashu');

//console.log(JSON.stringify(person1.context));

//console.log(person1.context);

//console.log(this);

//var person2  = person('ashu2');

//console.log(person2.context);

