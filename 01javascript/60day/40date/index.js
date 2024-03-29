/**
 * date 时间
 * 内置方法直接用
 */

/**
 * 获取时间
 */
let date = new Date(); // 获取计算机时间
console.log("date:", date);

// 对时间进行处理
// 获取年
console.log("date.getFullYear", date.getFullYear());
// 获取月 ⚠️计算机月份是从零开始的 需要加一
console.log("date.getMonth()", date.getMonth() + 1);
// 星期几
console.log("date.getDay()", date.getDay());
// 几号
console.log("date.getDate()", date.getDate());
// 获取小时
console.log("date.getHours()", date.getHours());
// 获取分
console.log("date.getMinutes()", date.getMinutes());
// 获取秒
console.log("date.getSeconds()", date.getSeconds());
// 获取毫秒
console.log("date.getMilliseconds()", date.getMilliseconds());
// 获取系统语言的日期  年月日
console.log("date.toLocaleDateString()", date.toLocaleDateString());
// 获取年月日时分秒
console.log(" date.toLocaleString()", date.toLocaleString());

/**
 * 封装一般日期格式 如：2021-7-28 19:17:33
 */

function formatDate(date) {
  let y = date.getFullYear(); //getFullYear方法以四位数字返回年份
  let M = date.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11),需+1
  let d = date.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
  let h = date.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)
  let m = date.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
  let s = date.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
  return y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;
}
let date1 = formatDate(new Date());
console.log(date1); //  2021-7-28 19:17:33

/**
 * 通过new Date() 将时间转化成毫秒数
 * 应用：算两个日期相隔多少天
 */

function IntervalDate(date1, date2) {
  let num1 = new Date(date1).valueOf(); // 将时间转化为毫秒数
  let num2 = new Date(date2).valueOf();
  return (num2 - num1) / 1000 / 60 / 60 / 24; // 两个毫秒数相减再取天数
}
console.log(IntervalDate("2021-7-2", "2021-7-28")); // 26

/* 
  判断时间是否晚于当前时间
*/

function laterCurrentDate(date) {
  let num1 = new Date().valueOf();
  let num2 = new Date(date).valueOf();
  if (num1 > num2) {
    return true;
  } else {
    return false;
  }
}
