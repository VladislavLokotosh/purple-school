const cardNumber = '4642-3302-0226-0904';
function validateLuna(number) {
  const cardNumStr = cardNumber.toString().replace(/\D/g, '');
  if (cardNumStr === '') return false;
  
  const cardDigits = cardNumStr.split('').map(Number).reverse();
  let sum = 0;
  console.log(cardDigits)
  for (let i = 0; i < cardDigits.length; i++) {
    let digit = cardDigits[i];
    if (i % 2 !== 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  
  return sum % 10 === 0;
}

console.log(validateLuna(cardNumber))