/* 
不想找出符合的字符串
直接告诉我 符不符合就完了
返回 true false
*/
// ^ 开头 $结尾
// 1开始 第二位数是 3-9  然后 9个数字 然后结束
// 电话号码 1[3-9]\d{9}
console.log(/^1[3-9]\d{9}$/.test("13551320987"));

// qq号码 5-11位
// 开头 数字 5-11 位 然后结束
console.log(/^\d{5,11}$/.test("487992376"));

// 年龄 18-100  18-19 20-99 100
console.log(/^[1[8-9]|[2-9]\d|100]$/.test(100));

// 百度 验证身份证 var reg=/^[0-9a-zA-Z_]{4,18}@[0-9a-zA-Z]{2,16}(\.[a-z]{2,16}){1,2}$/
