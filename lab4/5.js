/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */



function checkBrackets(str) {
    k=[]
    z=0
    for(i=0;i<str.length;i++){
if ((str[i]=='[')||(str[i]=='(')||(str[i]=='<')){
    if(str[i]=='['){
    k[z]=']'
    ++z 
    }
    if(str[i]=='('){
        k[z]=')'
        ++z 
        }
        if(str[i]=='<'){
            k[z]='>'
            ++z 
            }
}else{
if (!(k[k.length-1]==str[i])){
return false
}else{
    k.pop()
}
}
}
return true
}

module.exports = checkBrackets;
