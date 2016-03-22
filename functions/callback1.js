/**
 * Created by ashu on 22/3/16.
 */

var data = [];

function getData(data){

  if(typeof data === "string")
  {
    console.log(data);
  }
  else if(typeof data === "object")
  {
    for(var item in data)
    {
      console.log(item + "fdfsdfsdfsdfsdfsdfsdf" + data[item])
      console.log(data)
    }
  }

}

function dosomething(options,cb){
  data.push(options);
  cb(data);

}

dosomething([{name:'ashu' , company:'ttnd'},{name:'tanu',company:'niit'}] , getData);


console.log(">>>>>>>>>>>>>>>>" , data)

