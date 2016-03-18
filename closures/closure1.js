/**
 * Created by ashu on 18/3/16.
 */

function counter(num){

  function inc (){
    num++
    return num
  }

  return inc();
}


console.log(counter(15))


var firstname = function(first){

  var lastName = function(last){

    return first + ' ' + last
  }
return lastName

}

var fullname = firstname('ashu');
console.log(fullname);


console.log(fullname('lekhi'));
