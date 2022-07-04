/* 1.去掉数组中重复的元素
var arr = [1,2,2,2,3,3,4,5,2,3,4,4,2,23,4,5,3,54,3,3,4]  使数组的每一项都不一样 */
// 方法一
// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 2, 3, 4, 4, 2, 23, 4, 5, 3, 54, 3, 3, 4];
// for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//         if (arr[j] == arr[i]) {
//             arr.splice(j, 1);
//             j--;
//         }
//     }
// }
// console.log('arr', arr)
// 方法二
// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 2, 3, 4, 4, 2, 23, 4, 5, 3, 54, 3, 3, 4];
// var newArr = [];
// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 2, 3, 4, 4, 2, 23, 4, 5, 3, 54, 3, 3, 4];
// for (var i = 0; i < arr.length; i++) {
//   if (newArr.indexOf(arr[i]) == -1) {
//     newArr.push(arr[i]);
//   }
// }

/* 2.猜数字游戏，有一个0-100随机数 玩家有5次输入的机会猜，

每次猜一次，都要将结果告诉玩家是小了，还是大了

如果在5次机会内猜中，输出“聪明”，程序结束

如果5次机会用完 程序直接结束。 */


/* 3.有一个4个长度的数组，每个位置装有0-9之间的随机数字，有10次输入的机会来猜每个位置的上的数是什么，

每次猜完4个数字以后都要给出提示，正确几个 错误几个，

只有位置和数字完全正确才算正确，其他情况全视为错误。 */

// const arr = []

// for (let i = 0; i < 4; ++i) {
//     const randomNumber = parseInt(Math.random() * 10)
//     arr.push(randomNumber)
// }
// console.log('arr', arr)
// for (let i = 0; i<10; ++i) {
//     const inputNumber = parseInt(window.prompt("请输入一个四位数"))
// }



/* 4. 根据双色球摇奖规则，产生6个红球1个蓝球；红球范围1-33， 蓝球范围1-16. 红球不能有重复的产生。

思路：每次产生一个随机球，存入数组中，下一次产生的随机球，要和数组中的进行比较，如果有相等的，

则重新产生一个号（循环变量要减1），反之继续存入数组；直到产生6个球；蓝球单独产生；最后输出所有球。 */
var red = [];

// 生成红色球
for(var i = 0;i < 6;i++){
  // 生成随机数
  var p = Math.floor(Math.random() * 33 + 1);
  if(red.indexOf(p) == -1) { // 判断没有重复
    red.push('红色' + p);
  } else {
    // 如果重复了，则需要减去该次操作
    i--;
  }
}
console.log(red);

var blue = '蓝色' + Math.floor(Math.random() * 16 + 1);
