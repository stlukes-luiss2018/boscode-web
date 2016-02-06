$(document).ready(function () {
  $("#runButton").click(Add2Numbers);
});

var Add2Numbers = function () {
  var firstNumber = $("#firstNumberInput").val();
  firstNumber = parseInt(firstNumber);

  var secondNumber = $("#secondNumberInput").val();
  secondNumber = parseInt(secondNumber);

  var total = firstNumber + secondNumber;

  console.log("the sum of your 2 numbers is " + total);
};
