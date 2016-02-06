$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function() {

  var signal = 'red';

  switch (signal) {
    case 'red':
      console.log("stop");
      break;
    case 'amber':
      console.log("stop");
      break;
    case 'green':
      console.log("proceed through intersection");
      break;

    default:
      console.log("proceed with caution");
  }

};
