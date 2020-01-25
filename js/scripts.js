$(document).ready(function(){
  //Business Logic
  var HAL = function(number){
    var output = []; 
    var three = "I'm sorry, Dave. I'm afraid I can't do that."
    for(var i = 0; i <= number; i++){
      var numOut = i.toString();
      if (numOut === 3) {
        output.push(three);
      };
      else if(numOut === 2) { //Can't figure out why else if statements aren't working
        output.push(two);
        var two = "Boop!"
      };
      else if(numOut === 1) {
        var one = "Beep!"
        output.push(one);
      };
      else {
        output.push(i)
      }
      console.log(output);
      //return(output);
    });
   
  };

  console.log(HAL(output));



var input = $("input#inputNum").val
  //Interface Logic
  $("form#formOne").submit(function(event){
    event.preventDefault();
  $("#resultOutput").text(HAL(input));

  });
});