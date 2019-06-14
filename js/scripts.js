//User interface logic

$(document).ready(function() {

//Select form and submit button
  $("form#input-form").submit(function(event) {
    event.preventDefault();

//Create variable what user inputs
    var userInput = $("input#number").val();

//Grab information and create variable so i can create function for it. Little confused on this one.
    userInput = checkForAllExceptions(userInput);
    $("#output").text(userInput);
    $("#result").show();
  });

});

//Business Logic

// Create var with function that target number and split it by one character
var isBeep = function(number) {
  number.split("");
  for (var index = 0; index <= number.length; index += 1) {
    if(number[index] === "0") {
      return true;
    };
  };
  return false;
};
