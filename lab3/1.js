/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
let o=0;
let z;

if (str[0]==" "){
do{
z=o;
++o
}while (str[o]!=" ");
}else{
    o=0;
}

aa=str[o].toUpperCase();

let k=0;
let a2="";
for (let i=o+1; i<str.length;i++){

    if (str.charAt(i)==" "){
aa=aa+" ";
a2=str[i+1].toUpperCase()
aa=aa+a2;
++i;
  }
  else{

aa=aa+str[i];

  }


}
return aa;
}

module.exports = capitalize;
