$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function() {

  for (var i = 1; i < 13; i = i + 1) {
    console.log('12 x ' + i + ' = ' + (i * 12));
  }

};
