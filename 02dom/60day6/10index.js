// 正则用来干什么
let str = "abc 34 45 89 h87";
// 找出数字 放到数组中
console.log(str.match(/\d+/g));
// 猜一下 \d 是什么意思  大胆假设 大胆论证
// \d 数字
// \d+ 至少一个数字

/* 
创建正则
let reg = new RegExp(规则, 条件)
let reg = /规则/条件
*/

// let reg = new RegExp(/\d+/, g)
// let reg = /\d+/g
