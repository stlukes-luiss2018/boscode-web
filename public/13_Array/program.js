$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function () {
  var nameArray = [];

  //Note: javascript arrays start at index 0
  nameArray[0] = "John";
  nameArray[1] = "Hassan";
  nameArray[2] = "Chris";
  nameArray[3] = "Mary";

  console.log("The third name is: " + nameArray[2]);

  nameArray[1] = "Adam";

  for (var i = 0; i < 4; i = i + 1) {
    console.log("nameArray at index" + i + " = " + nameArray[i]);
  }

};
