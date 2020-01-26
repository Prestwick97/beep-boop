$(document).ready(function(){
  //business logic
  var input = prompt("Please enter a number:").split("");
  var output = [];
  var one = "Beep!"
  var two = "Boop!"
  var three = "I'm sorry, Dave. I'm afraid I can't do that."

  var HAL = function(number){
    for (var i = 0; i <= number; ++i ){
      if(number == 3){
        output.push(three);
      }
      else if (number == 2){
        output.push(two);
      }
      else if (number == 1){
        output.push(one);
      }
      else {
        output.push(input);
      }
    }
  }
  HAL(input);
  console.log(output);

});