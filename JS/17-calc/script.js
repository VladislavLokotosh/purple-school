"use strict";

function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultElement = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Ошибка: введите оба числа!";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultElement.textContent = "Ошибка: деление на ноль!";
        return;
      }
      result = num1 / num2;
      break;
  }

  resultElement.textContent = `Результат: ${result.toFixed(2)}`;

  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
