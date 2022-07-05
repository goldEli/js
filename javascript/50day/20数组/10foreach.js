/**
 * 遍历数组
 * for
 * 
 * foreach
*/
let arr = [11,22,33,44,55]
arr.forEach(function(value, index) {
    console.log('value,index', value,index)
})

/**
 * forEach 和 for 的区别
 * 
 * forEach 没有break，不能打断循环
 * forEach 只能用于数组
 * for 还可以用于字符串
*/
const str = "hello"
for (let i = 0; i < str.length; i++) {
    console.log('i', i, str[i])
}

