$(document).ready(function() { 

setTimeout(tenSeconds, 1000 * 60);
setTimeout(timeUp, 1000 * 15);

//  Step 3:
//  Fill in the blanks to these functions.


var timeup = false;
function timeUp() {

  // in the element with an id of timer add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#timer").append("<h2>Time's Up!</h2>");
  console.log("time is up");
  var timeUp = true;
  //  The following line will play the audio file we linked to above:
  audio.play();
}

$("button").on("click", function() {
  if (timeUp == false){
  var amountCorrect = 0;
for(var i = 0; i <= 45; i++) {
  var radios = document.getElementsByName("group" + i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value === "correct" && radio.checked) {
      amountCorrect++;
      
    }
  }
    $("#numberRight").html(amountCorrect);
  }

}
});

//https://trivia.fyi/

});