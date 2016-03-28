/**
 * Created by ashu on 28/3/16.
 */



global_var = true;
function someFunc() {
  another_global = 42;
  local_var = 5;

  //console.log(another_global);
  console.log(local_var);

}


console.log(global_var);

someFunc();


console.log(another_global);


console.log(local_var);


var local_var

function sum(start, end) {
  var n = 0;
  for (i = start; i <= end; i++) {
    n += i;
    console.log('inside sum' , i)
    console.log('inside sum' , n)

  }
  return n;
}

function nested_sum(num) {
  var n = 0;
  for (i = 1; i <= num; i++) {
    n += sum(1, i);
    console.log('inside nested sum' , i)
    console.log('inside nested sum' , n)

  }
  return n;
}

//console.log(nested_sum(3));

nested_sum(3);






