/**
 * 处理数组的每个值
 * ["tom", "lily", "eli"]
 * => + "hello "
 * ["hello tom", "hello lily", "hello eli"]
*/

const arr = ["tom", "lily", "eli"]
const newArr = arr.map(function(value, index) {
    console.log('value, index', value, index)
    return "hello " + value
})
console.log('newArr', newArr)