/* 
箭头函数

*/

const sum = function(a,b) {
    return a+b
}
// function 关键字不要了，后面加一个箭头
const sum1 = (a,b) => {
    return a+b
}

// 当只有一个参数时，可以省略括号
const sum2 = a => {
    return a + 1
}

// 也可以省略return关键字
const sum3 = a => a + 1

/* 
箭头函数的好处：
1. 代码简洁
2. this 问题（后面会讲）
*/