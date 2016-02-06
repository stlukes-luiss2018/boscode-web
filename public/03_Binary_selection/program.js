$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function() {
  var myGuess = 42;

  var guess = $( "#guessInput" ).val();
  guess = parseInt(guess);

  if ( guess === myGuess ) {
    console.log("Well done - you guessed my number!");
  } else {
    console.log("That is not correct.");
  }

};
