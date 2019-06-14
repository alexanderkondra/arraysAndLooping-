//User interface logic

$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val();
    userInput = checkForAllExceptions(userInput);
    $("#output").text(userInput);
    $("#result").show();
  });

});

//Business Logic

var isBeep = function(number) {
  number.split("");
  for (var index = 0; index <= number.length; index += 1) {
    if(number[index] === "0") {
      return true;


var checkForAllExceptions = function(number, name) {
  if (isNaN(number) == true) {
    number = "Please, make sure to enter a number";
    return number;
  };
};
