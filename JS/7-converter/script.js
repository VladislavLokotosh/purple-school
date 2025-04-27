const RUB_USD = 82.59;
const RUB_EUR = 93.34;
const EUR_RUB = 0.0107;
const USD_RUB = 0.0121;

function converter(sumOfFunds, mainCurrency, targetCurrency) {
  switch (true) {
    case mainCurrency === "rub" && targetCurrency === "usd":
      return sumOfFunds / RUB_USD;
    case mainCurrency === "rub" && targetCurrency === "eur":
      return sumOfFunds / RUB_EUR;
    case mainCurrency === "usd" && targetCurrency === "rub":
      return sumOfFunds * USD_RUB;
    case mainCurrency === "eur" && targetCurrency === "rub":
      return sumOfFunds * EUR_RUB;
  }
}

console.log(converter(1000, "rub", "usd"));
