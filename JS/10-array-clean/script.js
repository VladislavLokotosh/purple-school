function deleteFunc(numb) {
  return numb > 5 ? true : false;
}

function arrayClean(arr, func) {
  let resultArr = [];
  for (let elem of arr) {
    if (func(elem)) {
      continue;
    }
    resultArr.push(elem);
  }
  return resultArr;
}
