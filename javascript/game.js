$(document).ready(function() { 
//  Step 3:
//  Fill in the blanks to these functions.


var countdown = 0;
$('#countdown').timeTo(10, function(){ 
 
  $('#cdown').html("Time is up!"); 
  countdown ++;
});



$("button").on("click", function() {
  
if (countdown == 0) { 

  var amountCorrect = 0;
for(var i = 0; i <= 45; i++) {
  var radios = document.getElementsByName("group" + i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value === "correct" && radio.checked) {
      amountCorrect++;
      
    }
    $("#numberRight").html(amountCorrect);
    
  }

}
}
});

//https://trivia.fyi/

});