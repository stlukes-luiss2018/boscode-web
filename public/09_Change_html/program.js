$(document).ready(function () {
  $('#runButton').click(program);
  $('#clearButton').click(clear);
});

var clear = function() {
  $('#outputDiv').html('');
};

var program = function() {
  var r = Math.floor((Math.random() * 10) + 1);
  console.log(r);
  var text = '<p>' + r + '</p>';
  $('#outputDiv').append(text);
};
