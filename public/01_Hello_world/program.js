$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function () {
  console.log("Hello world");
  console.log(5 + 6);

  var number1 = 5;
  var number2 = 6;
  var result = number1 + number2;
  console.log("The result is " + result);



};
