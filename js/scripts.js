// User Interface logic
$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val();

    userInput = checkForAllExceptions(userInput);
    $(".output").text(userInput);
    $("#result").show();
  });

});

// Business logic
var checkForAllExceptions = function(number, name) {
  if (isNaN(number) == true) {
    number = "Please, make sure to enter a number";
    return number;
  } else if (isDivisibleByThree(number) === true) {
  number = "I'm sorry, Dave. I'm afraid I can't do that";
  return number;
  } else if (isBoop(number) === true) {
    number = "Boop!";
    return number;
  } else if (isBeep(number) === true) {
    number = "Beep!";
    return number;
  } else {
    return returnRange(number);
  };
};

var isBeep = function(number) {
  number.split("");
  for (var x = 0; x <= number.length; x++) {
    if(number[x] === "1") {
      return true;
    };
  };
  return false;
};

var isBoop = function(number) {
  number.split("");
  for (var x = 0; x <= number.length; x++) {
    if(number[x] === "2") {
      return true;
    };
  };
  return false;
};

var returnRange = function(number) {
  var rangeArray = [];
  for(var x = 0; x <= number; x++) {
    rangeArray[x] = x;
  };
  return rangeArray;
};

var isDivisibleByThree = function(number){
  parseInt(number);
  if(number % 3 === 0) {
    return true;
  } else {
    return false;
  };
};
