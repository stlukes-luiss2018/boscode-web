$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function () {
  var productArray = [];


  productArray[0] = {};

  productArray[0].id = 1;
  productArray[0].name = 'Oven cleaner kit';
  productArray[0].description = 'The ultimate solution for ovens, trays and racks';
  productArray[0].quantity = 10;
  productArray[0].price = 5.99;


  console.log('product name = ' + productArray[0].name);

};
