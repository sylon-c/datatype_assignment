module.exports = {
dataTypes: function(data){

  if(typeof(data) == typeof("")){
    return data.length;
  }else if(typeof(data) ==typeof(undefined)){
    return "no value";
  }else if(typeof(data) ==typeof(null)){
    return "no value"
  }
  else if (typeof(data) ==typeof(true)){
    return "the boolean"
  }else if (typeof(data) ==typeof(2)){
    number = (100 > data)? "less than 100" : "more than 100";
    return number
  }else if (typeof(data) ==typeof([])){
    if (data.length >= 3){
      return data[2]
    }else{
      return "undefined";}
  }
  else if(typeof(data) ==typeof("function(){}")){
     data(true)
     return "called back"
 }
}