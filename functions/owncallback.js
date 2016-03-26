/**
 * Created by ashu on 22/3/16.
 */


function democb(name){
console.log("hello" + name)
}


function greet(message){

  console.log(message)
}

function getName(person,cb){
  if(typeof cb ==="function"){
    cb(person)
  }
}

getName("hi how are you ashu?",greet);



