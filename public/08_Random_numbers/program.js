$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function() {
  var r = Math.floor((Math.random() * 10) + 1);
  console.log(r);
};
