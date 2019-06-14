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

var isBeep = function(number) {
  number.split("");
  for (var index = 0; index <= number.length; index += 1) {
    if(number[index] === "0") {
      return true;
    };
  };
  return false;
};


var isBoop = function(number) {
  number.split("");
  for (var index = 0; index <= number.length; index += 1) {
    if(number[index] === "1") {
      return true;
    };
  };
  return false;
};

var returnRange = function(number) {
  var rangeArray = [];
  for(var index = 0; index <= number; index += 1) {
    rangeArray[index] = index;
  };
  return rangeArray;
};

var checkForAllExceptions = function(number, name) {
  if (isNaN(number) == true) {
    number = "Please, make sure to enter a number";
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
