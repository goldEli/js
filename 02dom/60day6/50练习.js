// 1.写一个函数，参数为1.一个字符，2.一个字符串，返回这个字符出现在这个字符串的第几个位置，如果没有该字符，则返回-1
function checkStr(str, subStr) {
    return str.search(subStr)
}

console.log(checkStr("abcfhellosdf", "heleo"))


// 2.写一个函数，参数为1字符串.2截取字符串的起始位置，2.截取字符串的结束位置，要截取的字符串，最后根据函数参数返回对应截取的字符串
function slice(str, start, end) {
    return str.slice(start, end)
} 
console.log("1234567".slice(3,5))

// 3.写一个函数，参数为1.一个字符，2.一个字符串，根据这个字符 将 传入的字符串 分割成多个字符串，并用数组返回这些分割的字符串

function split(str, char) {
    return str.split(char)
}

console.log("123,434,2343,2".split(","))

// 4.写一个函数，参数为1.一个字符串，返回这个字符串的反向字符串。 

function reverse(str) {
    return str.split("").reverse().join("")
}

console.log(reverse("abc"))