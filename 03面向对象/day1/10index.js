// 创建对象

var jack = {
  name: "jack",
  age: 123,
  height: 179,
};

var som = new Object({
  name: "som",
  age: 123,
  height: 179,
});
console.log("som", som);

/* 
    对象里有一个重要的思想，叫做面向对象

    小明去上班：
    面向过程：1. 小明起床 2. 收拾洗漱 3. 开车上班
    面向对象：
        1. 对象是谁小明
        2. 小明拥有哪些属性：床、洗漱用品、车
        3. 小明拥有哪些能力：洗漱、开车上班
*/

/* 
    面向对象带来了4大优势：封装 继承 多态

    封装：我把方法封装起来重复使用
    多态: 动态绑定 动态指定不同的对象 （this关键字）
*/

/* 
如何创造对象

const obj = new Object()
obj.name = "123"
obj.age = 32
obj.say = function() {}

Object 是 构造函数（母亲），创造出许许多多的对象（儿子）

*/

/* 
人类的构造函数
构造函数与普通函数的区别就是  首字母是否大写
*/
function Person(name, age) {
  // this类似于占位符，运行时哪个对象调用this就指代谁
  this.name = name;
  this.age = age;

  this.say = function () {
    console.log(`大家好我叫${this.name}`);
  };
}

const lily = new Person("lily", 30);
const tom = new Person("tom", 18);
// lily 调用了 age，那么this就指的是lily
console.log("lily.age:", lily.age);

// lily 和 tom 都拥有了 构造函数为它们提供的方法和属性
lily.say();
tom.say();
