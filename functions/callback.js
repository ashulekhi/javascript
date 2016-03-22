/**
 * Created by ashu on 22/3/16.
 */

var names = ['priya','akash','arun','ashu', 'guarav'];

names.forEach(function(name,index){
  console.log(name);
  console.log(index + 1)
});





// Another technique
names.forEach(cb);

function cb(name,index){
  console.log(name);
  console.log(index + 1)
}
