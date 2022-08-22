/**
 * 字符串
 */
/**
 * 创建字符串
 */
// 字面量方式创建字符串
let str = "字符串";
let str1 = "字符串";
let str2 = `字符串`; // 模板字符串

/**
let name = "123"
let str = "字符串" + name
let str1 = '字符串' + name
let str2 = `字符串${name}` // 模板字符串
*/

// 创建字符串对象
let strObj = new String("123");

console.log("typeof str", typeof str); // string
console.log("typeof strObj", typeof strObj); // object

/**
 * 字符串长度
 */

console.log("str.length", str.length); //"字符串"

// 通过下标获取
console.log("str[0]", str[0]); // 字

/**
 * 截取字符串
 */
let str3 = "hello world";
console.log("str3.length", str3.length);
console.log("str3.slice(1,3)", str3.slice(1, 3)); //el

/**
 * 字符串出现的位置
 *
 * "hello"是否包含"h"
 */

let str4 = "hello";
console.log('str4.indexOf("h")', str4.indexOf("h")); // 0
console.log('str4.indexOf("m")', str4.indexOf("m")); // -1
console.log('str4.indexOf("ll")', str4.indexOf("ll")); // 2

// 通过是否等于-1来判断 字符串的包含关系

/**
 * 替代字符串
 */
let str5 = "hi tom";
// 把 tom 替换成 lily
console.log('str5.replace("tom", "lily")', str5.replace("tom", "lily"));

/**
 * 分隔字符串
 */

let str6 = "2022-06-07";
// 利用 - 作为分隔符
console.log('str6.split("-")', str6.split("-"));

/**
 * 清空字符串的首位空格
 */
let str7 = " 张三  ";
console.log("str7:", "1" + str7);
console.log("str7.trim():", "1" + str7.trim());

/**
 * 判断字符串是否包含某个字符，有返回 true 没有返回 false
 * 
 * 判断数组是否包含一样
 */
let str8 = "hello world";
console.log('str8.includes("hello")', str8.includes("hello")); // true
console.log('str8.includes("123")', str8.includes("123"));// false


