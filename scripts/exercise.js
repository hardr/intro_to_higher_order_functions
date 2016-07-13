//great than 10
var anyArr = [8, 9, 10, 11];

function greaterThan10(number) {
  if (number > 10) {
    return true;
  } else {
    return false;
  }
}

function any(array, aFunction) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (aFunction(array[i])) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else {
    return false;
  }
}

//surprise
function surprise() {
  return function() {
    return "surprise!";
  }
}

//onlyOdd filter
var anyArr = [1,2,3,4];

function onlyOdd(number) {
  if (number % 2) {
    return false;
  } else {
    return true;
  }
}

function any(array, aFunction) {
  var odds = [];
  for (var i = 0; i < array.length; i++) {
    if (aFunction(array[i])) {
      odds.push(i);
    }
  }
  return odds;
}

//sumTwoNumbers
function sumTwoNumbers(num1) {
  return function(num2) {
    return num1 + num2;
  }
}
