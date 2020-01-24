$(document).ready(function(){
  //Business Logic
  // var output = ("#output").text();
  var three = "I'm sorry, Dave. I'm afraid I can't do that."
  var two = "Boop!"
  var one = "Beep!"
  var inputNum = ("#inputNum").split("");
  for(var i = 0; inputNum.length; i++) {
    if (i==3) {
console.log(three);
    }
    else if (i ===2) {
      console.log(two);
    }
    else if (i===1) {
      console.log(one);
    }
    else {
      console.log(inputnum.length);
    }
  }

  //Interface Logic
  $("form#formOne").submit(function(event){
    event.preventDefault();
  })
});