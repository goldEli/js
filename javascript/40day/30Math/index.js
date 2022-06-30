/* 
Math 方法
JavaScript 内置的一个方法，主要是提供一些数学方法和计算，平方 随机数 绝对值啊
*/
/* 获取随机数 */
console.log("Math.random()", Math.random());
// 获取0-9随机数
// Math.random() (0, 1) => (0,10) => [0,9]
const randomNumber = Math.random();
console.log("parseInt(randomNumber * 10)", parseInt(randomNumber * 10));
// 20-50 随机数
// (0,1) => (0-31) => (20-51) => [20-50]
// parseInt(Math.random() * (max - min + 1) + min)
console.log(
  "parseInt(Math.random()*(50-20)+20)",
  parseInt(Math.random() * (50 - 20 + 1) + 20)
);

/**
 * 四舍五入
 */
console.log("Math.round(5.55)", Math.round(5.55)); //6
console.log("Math.round(5.4)", Math.round(5.4)); //5

/**
 * 向上取整
 */
console.log("Math.ceil(5.4)", Math.ceil(5.4)); //6

/**
 * 向下取整
 */
console.log("Math.floor(5.8)", Math.floor(5.8)); //5

/**
 * 次方
 */
console.log("Math.pow(2,3)", Math.pow(2, 3)); //8

/**
 * 平方根
 */
console.log("Math.sqrt(9)", Math.sqrt(9)); //3

/**
 * 绝对值
 */
console.log("Math.abs(-100)", Math.abs(-100)); //100

/**
 * 最大值最小值
 */

let a = 99;
let b = 8;
console.log("Math.max(a,b)", Math.max(a, b)); // 99
console.log('Math.min(1,4,3,-100)', Math.min(1,4,3,-100)) // -100