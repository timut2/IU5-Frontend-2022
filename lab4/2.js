const res = require("express/lib/response");

/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
let res=true
if (str.length%2==0)
    {
    for (i=0;i<(str.length/2);i++){
        if (str[0+i]==str[str.length-i-1]){
        }
        else{
            res=false
            }
    }
    }
else{
    for (i=0;i<(Math.floor(str.length/2));i++){   
        if (str[0+i]==str[str.length-i-1])
        {

        }else{
            res=false
            } 
        }
    }
return res
}

module.exports = isPalindrome;
