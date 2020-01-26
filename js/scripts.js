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
        console.log(three);
      }
      else if (number == 2){
        console.log(two)
      }
      else if (number == 1){
        console.log(one);
      }
      else {
        console.log(number);
      }
    }
    console.log(HAL(input));
  }
});