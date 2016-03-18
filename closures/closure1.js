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
