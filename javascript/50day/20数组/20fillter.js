/**
 * 过滤数组 filter 留下满足条件的
*/
var a = [1,3,5,3,1,9,10,34]

console.log(a.filter(function(value, index){
    return value > 3 //  true  留下 false 移除
}))