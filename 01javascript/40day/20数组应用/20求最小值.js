/* 求最小值 */
let arr = [-100, 200, 3, 99, 500, 0]
// 假如第一个值最小
let min = arr[0]
// 从第二个开始和第一个比
for (let i = 1; i < arr.length; ++i) {
    let cur = arr[i]
    if (cur < min) {
        min = cur
    }
}
console.log('min', min)