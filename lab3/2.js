/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let temp = str.split(" "); 
    let x=[];
    let x1=0;
    for (let i=0; i<temp.length;i++)
    { temp[i]=parseFloat(temp[i]);
    }
    for (let i=0; i<temp.length;i++){
  if (!isNaN(temp[i])) {
      x[x1]=temp[i]; ++x1;
    }
}
  let a=x[0]; 
  let b=x[0]; 
  for (let i=0; i<x.length;i++){
      if (x[i]<a){
          a=x[i] ;  
        } 
        if (x[i]>b){
            b=x[i] ;  }
           } 
  return {min: a, max:b};
}


module.exports = getMinMax;
