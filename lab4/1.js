/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */




function getAnagramms(arr) {
    if (arr.length!=0){
        k=[];
        z=[];
        j=[]; jj=[];
         while (arr.length!==0) {
             hh=arr[0].toLowerCase().split('').sort().join('');
             k.push(arr[0]);
              arr.splice(0,1);  
        for (i=0;i<arr.length;i++){ 
            h=arr[i].toLowerCase().split('').sort().join('');
           if(h===hh){ 
               k.push(arr[i]);
                arr.splice(i,1); }
        }if(k.length!=0){
             z.push(k);}
              k=[];
        }return z     
    }else{
    xd=[]
return xd
    }
}

module.exports = getAnagramms;
