$(document).ready(function(){
  //business logic
  var input = parseInt(prompt("Please enter a number:"));
  var inputArr = input.split("");
  var output = [];
  var one = "Beep!";
  var two = "Boop!";
  var three = "I'm sorry, Dave. I'm afraid I can't do that.";

  // var HAL = function(number){
  //   for(var i = 0; i <=number.length; i++){
  //     output.push(i);
  //     if(number[i].includes(1)) {
  //       output.push("beep!")
  //     }
  //   }
  // }
  var HAL = function(number){
    for (var i = 1; i <= number; ++i ){
      if(i == 3){
        output.push(three);
      }
      else if (i == 2){
        output.push(two);
      }
      else if (i == 1){
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