/**
 * 函数
 * 作用：代码复用
 */

console.log(((9 * 100) % 20) + 1000 - 40);
console.log(((3 * 100) % 20) + 1000 - 40);
console.log(((5 * 100) % 20) + 1000 - 40);

// console.log(5*100%20+1000-40) 除了 5 其他都是重复的

/**
 * 定义函数
 * function  定义一个函数
 * calculate 函数名，用于别人调用
 * {}        是函数体，调用函数时会执行函数体中的代码
 * a         参数（形参），占位符号，把位置先占着
 */
function calculate(a) {
  console.log(((a * 100) % 20) + 1000 - 40);
}
/**
 * 使用函数
 * 函数名+(参数，实参，真实的参数)
 */
calculate(9);
calculate(3);
calculate(5);

/**
 * 没有参数的函数
 */
function hello() {
  console.log("hello");
}

hello();

/**
 * 多个参数的函数
 * 用空格隔开
 */
function sum(a, b) {
  console.log("求和", a, b);
}
sum(10,100)

/**
 * 有返回值的函数
 * return
*/
function getNumber() {
    return 1000
}

// 定义一个变量将返回的值存起来
let number = getNumber()
console.log('return number', number)

// return 后面的代码不会运行
function test() {
    console.log("test1")
    /**
     * return 会阻止后面的代码运行
     * return 后面为空的话，返回值默认为undefined
    */
    return 
    console.log("test2")
}
const t = test()
console.log('t', t)

/**
 * return 返回数组
*/
function myMath(num1, num2) {
    let sumNumber = num1 + num2
    let subNUmber = num1 + num2
    return [sumNumber, subNUmber]
}
console.log(myMath(10,5))

/**
 * 匿名函数
*/
// 匿名函数存入变量中
let cal = function() {
    console.log("我是匿名函数！")
}
// cal()
// 立即执行函数（没名字没法调用，所以需要立即执行）

(function (){
    console.log("我是匿名函数！ 没人调用的情况下，我自己执行了")
}())