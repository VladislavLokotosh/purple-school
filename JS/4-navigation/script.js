//Координаты конечной точки
const adressLet = 1;
const adressLong = 1;
//Координаты начальной точки
const positionLet = 5;
const positionLong = 3;

//Расчеты
const distance = Math.sqrt(
  (positionLet - adressLet) ** 2 + (positionLong - adressLong)**2
);
//Вывод в консоль
console.log(distance)
