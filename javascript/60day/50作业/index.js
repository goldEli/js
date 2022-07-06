/* 1.写一个函数，参数1是一个字符，参数2是一个字符串，返回这个字符出现在这个字符串的第几个位置，如果没有该字符，则返回-1 。
模拟indexOf() */
function findStr(str1, str2) {
  return str2.indexOf(str1)
}

/* 2.写一个函数，参数1是截取字符串的起始位置，
参数2是截取字符串的结束位置，参数3要截取的字符串，最后根据函数参数返回对应截取的字符串 使用slice() */
function slice(start, end, str) {
    return str.slice(start, end)
}

/* 3.写一个函数，参数1为一个字符，参数2是一个字符串，根据这个字符 将 传入的字符串 分割成多个字符串，并用数组返回这些分割的字符串 

模拟split() */

function split(s, str) {
    return str.split(s)
}

/* 4.写一个函数，参数1是一个字符串，返回这个字符串的反向字符串。 */
function reverse(str) {
    return str.split("").reverse().join("")
}

console.log(reverse("123"));