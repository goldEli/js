// i 忽略大小写
console.log("忽略大小写", "AaBAc".match(/a/gi));
// g 全局 所有的都找出来
console.log("aa332aa33365".match(/3/g));

// \d 0-9数字
// 特殊字符都要加 斜杠 不然会当成字母处理
console.log("sfd234fsfs234".match(/\d/g));

// \w [a-zA-Z0-9_]
console.log("\\w [a-zA-Z0-9_]", "sdfsdSD234".match(/\w/g));

// \s 空格
console.log("空格", "   13  sdf   ".match(/\s/g));

// \D 非数字
console.log("非数字", "234sdf234ef——".match(/\D/g));

// \W [^a-zA-Z0-9_] a-zA-Z0-9_这些东西以外
console.log("\\W","%sdfs234_".match(/\W/g));

// \S 非空格
console.log("   13  sdf   ".match(/\S/g));

// 特殊字符需要转移 $ ^ \

let str = "http://www.baidu.com";
/**
 * http://
 * 看颜色报错 一般都是因为特殊字符没有转义
 */
console.log(str.match(/http:\/\//));

// + 一个或者多个
console.log("234sfsf123".match(/\d+/g));

// ? 可以有一个或者没有也行
console.log("a123a789ab123".match(/a\d?/g));

// * 可以无数个或者没有也行
console.log("a123a789ab123".match(/\d*/g));

// {n} 正好n个
console.log("234s12f9999sf123".match(/\d{3}/g));

// {n,m} 最少n个，最多m个
console.log("234s12f9999s000000f123".match(/\d{3,4}/g));

// {n,} 最少n个 多了无限
console.log("234s12f9999s000000f123".match(/\d{3,}/g));

// [] 或
console.log("abcabdacdfew".match(/[abc]/g)); // 字母包含abc
console.log("abcabdacdfew".match(/a[bc]d/g)); // 字符串 abd acd
console.log("abcabdacdadcfew".match(/a[bcd]/g)); // 字符串 ab ac ad

console.log("sfs324sdf".match(/[0-9]/g));
console.log("sfs324sdf".match(/[a-z]/g));
console.log("sfs324AJSIDsdf".match(/[a-zA-Z]/g));

console.log("sfs324sdf".match(/[^0-9]/g)); // 非数字
