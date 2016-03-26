/**
 * Created by ashu on 18/3/16.
 */
function createIds(celebreties){

  var i;
  var id = 100;
  for(i=0;i<celebreties.length;i++)
  {
    celebreties[i]["id"] = function(){
      return id + i;
    }
  }
  return celebreties;
}


var theCelebrities = [
  {
    name:'ashu',
    id : 0
  },
  {
    name:'tanu',
    id:1
  },
  {
    name:'kuldeep',
    id:2
  }
]

var createdIds = createIds(theCelebrities);

var oneid = createdIds[0];

console.log(oneid.id());

