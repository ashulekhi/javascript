/**
 * Created by ashu on 22/3/16.
 */

/*

var person ={
  no : '100',
  name:"not set",
  setName : function(firstname,lastname){
   this.name = firstname + " " + lastname
  }
}

function getName(fname,lname,cb){
  cb(fname,lname)
}


getName('ashu','lekhi' , person.setName)

console.log(person.name);

*/
/*console.log(Window.name);
console.log(window.name);*//*


console.log(name);
*/


//to use call or apply method to solve this object problem



var person ={
  no : '100',
  name:"not set",
  setName : function(firstname,lastname){
    this.name = firstname + " " + lastname
  }
}

function getName(fname,lname,cb,object){
  cb.apply(object,[fname,lname])
}


getName('ashu','lekhi' , person.setName,person)

console.log(person.name);

/*console.log(Window.name);
 console.log(window.name);*/

//console.log(name);






