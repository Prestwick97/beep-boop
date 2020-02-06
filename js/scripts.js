//business logic
var HAL = function(number){
  var output = [];
  for(var i = 1; i <= number; ++i){
    var str = i.toString();
    if(str.includes(3)){
      output.push(" I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else if(str.includes(2)){
      output.push(" Boop!");
    }
    else if(str.includes(1)){
      output.push(" Beep!");
    }
    else{
      output.push(" " + i)
    }
  } return output;
}

// User Interface
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var input = $("#inputNum").val().split(" ");
    var inputNum = parseInt(input);
    
    $("#resultOutput").text(HAL(inputNum));
  });
});