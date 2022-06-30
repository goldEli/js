/* 求最大值 */
let arr = [-100, 200, 3, 99, 500, 0]
// 加入第一个值最大
let max = arr[0]
// 从第二个开始和第一个比
for (let i = 1; i < arr.length; ++i) {
    let cur = arr[i]
    if (cur > max) {
        max = cur
    }
}
console.log('max', max)