/**
 查找符合正则条件的字符串
 找到了返回下标，没找到返回-1
*/
let str = "my name is haha";
let reg = /n/;
console.log(str.search(reg));

/**
str.match(正则) 
把符合条件的东西挑出来，放在数组里里面 
*/

let str1 = "abc12 125 1234 sdf12 1";
let reg1 = /\d/g; //把符合条件的一个数字挑出来
let reg2 = /\d\d/g; //把符合条件的两个数字挑出来
//但是在这儿即有两个又有三个，所以就出现了量词
let reg3 = /\d+/g;
console.log("把符合条件的一个数字挑出来",str1.match(/\d/g));
console.log("把符合条件的两个数字挑出来",str1.match(/\d\d/g));
console.log("只要至少一个数字的都挑出来",str1.match(/\d+/g));

/**
str.replace(把谁，替换成谁) 
字符串直接替换：缺点是只能替换一个
*/
let str4 = "aaabbb";
console.log(str4.replace("a", "c"));

/**
str.replace(正则，替换成谁) 
            可以把符合条件的都给替换掉
            let reg = /习近平|人工智能|上海/g
            document.write(str.replace(reg,'***'))
*/

let str5 = `央视网消息：9月17日，世界公众科学素质促进大会在北京召开，
        同日，2018世界人工智能大会在上海召开。当晚《新闻联播》播报，国家主席习近平分别向两场国					际大会致贺信。`

let reg5 = /习近平|人工智能|上海/g

console.log(str5.replace(reg5,'***')) //这种不能根据字的数量替换成*的个数

