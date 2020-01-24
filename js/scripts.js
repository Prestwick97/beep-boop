$(document).ready(function(){
  var HAL = function(number){
    var output = [];
    for(var i = 0; i <= number; i++){
      var numOut = i.toString();
      if (numOut === 3) {
        output.push(three);
      };
      else if(numOut === 2) {
        output.push(two);
      };
      else if(numOut === 1) {
        output.push(one);
      }
    }
  };









  //   //Business Logic
//   var output = ("#output").text();
//   var three = "I'm sorry, Dave. I'm afraid I can't do that."
//   var two = "Boop!"
//   var one = "Beep!"
//   var input = $("input#inputNum").val();
//   var inputNum = input.split();
//   console.log(inputNum);
//   for(var i = 0; inputNum.length; i++) {
//     if (i==3) {
// console.log(three);
//     }
//     else if (i ===2) {
//       console.log(two);
//     }
//     else if (i===1) {
//       console.log(one);
//     }
//     else {
//       // console.log(inputNum.length);
//     }
//   }

  //Interface Logic
  $("form#formOne").submit(function(event){
    event.preventDefault();
  })
});