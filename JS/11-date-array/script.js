const arr = ["10-02-2022", "test", "11/12/2023", "00/13/2022", "41/12/2023"];

function dateArray(arr){
    let arrSorted = arr.filter((item) => {
      if(item.length === 10 && (item.split('-').length === 3 || item.split('/').length === 3 )){
        return item
      }
    })
    .map(item =>{
      if(item.includes('-')) {
        return item.split('-')
      }
      return item.split('/').map((item, index, arr) => {
        if(index === 0){
          item = arr[index + 1];
          return item;
        }
        if(index === 1){
          item = arr[index - 1];
          return item;
        }
        return item;
      });
    })
    .filter((item) => {
      return !(item[0] > 31 || item[0] <= 0) && !(item[1] > 12 || item[1] <= 0) && !item[2] <= 0;
    })
    .map(item => item.join('-'))
    return arrSorted;
  }
console.log(dateArray(arr))