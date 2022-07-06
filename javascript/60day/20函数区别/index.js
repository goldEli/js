/**
 * 
*/
// 可以执行
// fun1()

function fun1() {
    console.log("fun1,我执行了")
}
// 可以执行
// fun1() 

// 不可以执行
fun2()
let fun2 = function() {
    console.log("fun2,我执行了")
}
// 可以执行
// fun2()