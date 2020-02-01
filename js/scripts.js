$(document).ready(function(){
  //business logic
  var input = parseInt(prompt("Please enter a number:"));
  // var inputArray = input.split("");
  var output = [];
  var one = "Beep!"
  var two = "Boop!"
  var three = "I'm sorry, Dave. I'm afraid I can't do that."

  var HAL = function(number){
    for(var i = 0; i<=number; i++){
output.push(i);
    }
  }


  HAL(input);
  console.log(output);

});