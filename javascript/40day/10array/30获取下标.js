const arr = ["apple","banana", "peach"]

const str = "peach"

// 获取值在数组中的下标
console.log('arr.indexOf(str)', arr.indexOf(str)) // 2
// 如果不存在就返回-1，所以可以通过这种方法来判断值是否包含在数组中
console.log('arr.indexOf("grape")', arr.indexOf("grape")) //-1
console.log('arr.indexOf("banana")', arr.indexOf("banana") !== -1) // true
console.log('arr.includes("banana")', arr.includes("banana")) // true
console.log('arr.includes("grape")', arr.includes("grape")) // false

/**
 * 应用：去重
*/
const arr1 = ["a","a","b","c","d","d","c","d","d","c","d","d"]
// => ["a", "b", "c", "d"]
const newArr = []
for (let i = 0; i < arr1.length; ++i) {
    const cur = arr1[i]
    // 如果不在 newArr 中就加入
    if (!newArr.includes(cur)) {
        newArr.push(cur)
    }
}
console.log('newArr', newArr)

