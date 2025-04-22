const password = prompt("Введите пароль:");

function encryption(password) {
  let encPass = password.split("");
  encPass = encPass.slice(3).concat(encPass.slice(0, 3)).join("");
  return encPass;
}

function check(encPass, password) {
  let checkCrypto = encPass.split("");
  checkCrypto = checkCrypto.slice(-3).concat(checkCrypto.slice(0, -3)).join("");
  return checkCrypto === password;
}

const encripted = encryption(password);
console.log(check(encripted, password));
