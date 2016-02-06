$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function() {
  var i = 1;

  do {
    console.log(i);
    i = i + 1;
  } while ( !(i > 10) )

};
