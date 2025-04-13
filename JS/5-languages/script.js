//Определяем предпочтительный язык в браузере
const getUserLanguage = () => {
  //Проверяем поддержку navigator.languages
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  }
  //Для старых браузеров
  return navigator.language || navigator.userLanguage || "en";
};


//Выводим в консоль приветствие
switch (getUserLanguage()){
    case "en":
        console.log("Good day!")
        break
    case "de":
        console.log("Gutten tag!")
        break
    default:
        console.log("Добрый день!")
}