var number1 = prompt("First Number");
var operation = prompt("Operation");
var number2 = prompt("Second Number");
var parseNumber1 = parseInt(number1);
var parseNumber2 = parseInt(number2);
console.log(typeof number1);
function calc(number1, operation, number2) {
  if (operation === "+") {
    var sum = add(number1, number2);
    console.log(number1, "+", number2, "=", sum);
    return number1, number2, sum;
  }
  if (operation === "-") {
    var sum = subtract(number1, number2);
    console.log(number1, "-", number2, "=", sum);
    return number1, number2, sum;
  }
  if (operation === "*") {
    var sum = multiply(number1, number2);
    console.log(number1, "*", number2, "=", sum);
    return number1, number2, sum;
  }
  if (operation === "/") {
    var sum = divide(number1, number2);
    console.log(number1, "/", number2, "=", sum);
    return number1, number2, sum;
  }
}
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}
calc(parseNumber1, operation, parseNumber2);