//User interface logic

$(document).ready(function() {

//Select form and submit button
  $("form#input-form").submit(function(event) {
    event.preventDefault();

//Create variable what user inputs
    var userInput = $("input#number").val();

//Grab information and create variable so i can create function for it. Little confused on this one.
    userInput = checkForAllExceptions(userInput);
    $(.output).text(userInput);
    $("#result").show();
  });

});
