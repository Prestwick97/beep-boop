$(document).ready(function(){
  //business logic
  var input = prompt("Please enter a number:").split("");
  var inputNum = parseInt(input);
  var output = [];
  // var HAL = function(number){
  //   for(var i = 0; i <=number.length; i++){
  //     output.push(i);
  //     if(number[i].includes(1)) {
  //       output.push("beep!")
  //     }
  //   }
  // }
  var HAL = function(number){
    for(var i = 1; i <= number; i++ ){
      if(i.tostring.includes("3")){
        output.push("I'm sorry, Dave. I'm afraid I can't do that.");
      }
      else if(i.tostring.includes("2")){
        output.push("Boop!");
      }
      else if(i.tostring.includes("1")){
        output.push("Beep!");
      }
      else {
        output.push(i);
      }
    }
  }

  HAL(inputNum);
  console.log(output);

});