/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    count=1
    t=""


    for(i=0;i<str.length;i++){
        if (count==1){
            t+=str[i]
        }
    
    if (str[i]==str[i+1]){
    ++count
}else
    {
        if (count!=1){
        t+=`${count}`;
        count=1
        }
    }

}
return t;
}

module.exports = rle;
