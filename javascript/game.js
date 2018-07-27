$(document).ready(function() { 
function init(){}

function conclude(){}

//init the game when the webpage is loaded
init();



$("button").on("click", function() {
    var amountCorrect = 0;
for(var i = 0; i <= 45; i++) {
  var radios = document.getElementsByName("group" + i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value === "correct" && radio.checked) {
      amountCorrect++;
      alert("Correct Responses: " + amountCorrect);
    }
  }
}
});

//https://trivia.fyi/

});