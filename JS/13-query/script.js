const obj = { 
    search: "Вася", 
    take: 10 
};

const queryUrl = Object.keys(obj)
  .map((key) => {
    return `${key}=${obj[key]}`;
  })
  .join("&");

console.log(queryUrl);
