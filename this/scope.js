/**
 * Created by ashu on 28/3/16.
 */

  'use strict'

var name = "outer";
function one() {
  var name = "middle";
  var other = "findme";
  function two() {
    var name = "inner";
    // Here `name` is "inner" and `other` is "findme"
    console.dir({name: name, other: other});
    console.log(name)
  }
  two();
  // Here `name` is "middle" and `other` is "findme"
  console.dir({name: name, other: other});
}
one();
// Here `name` is "outer" and `other` is undefined.
console.dir({name: name});
//console.dir({other: other});


console.log([1,220]);
console.dir([1,220]);
