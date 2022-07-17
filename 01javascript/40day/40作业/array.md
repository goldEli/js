### 题. 求值

数组为：[1,3,5,7,24,32,25,48]
    1.求数组奇数的个数和偶数的个数
    2.求出上面数组的平均值

``` js
var arr = [1,3,5,7,24,32,25,48];
var jishu = 0,
    oushu = 0,
    sum = 0;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        oushu++;
    }
    sum += arr[i];
}
jishu = arr.length - oushu;
console.log('平均值：',sum / arr.length);
```

### 题. 

定义一个数组，并给出8个任意的初始数值，求该数组中大于平均值的数的个数，和小于平均值的数的个数。

``` js
var arr = [];
for(var i = 0; i < 8; i++) {
    var ran = Math.round(Math.random() * 1000);
    arr.push(ran);
}

var sum = 0;
for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
var p = sum / arr.length;
console.log(arr);
```

### 题. 挑出其中所有是大一的女生的的名字

``` json
['小A','女',21,'大一'],  ['小B','男',23,'大三'],
['小C','男',24,'大四'],  ['小D','女',21,'大一'],
['小E','女',22,'大四'],  ['小F','男',21,'大一'],
['小G','女',22,'大二'],  ['小H','女',20,'大三'],
['小I','女',20,'大一'],  ['小J','男',20,'大三']
```

``` js
var names = [
    ['小A','女',21,'大一'],  ['小B','男',23,'大三'],
    ['小C','男',24,'大四'],  ['小D','女',21,'大一'],
    ['小E','女',22,'大四'],  ['小F','男',21,'大一'],
    ['小G','女',22,'大二'],  ['小H','女',20,'大三'],
    ['小I','女',20,'大一'],  ['小J','男',20,'大三']
]
for(var i = 0; i < names.length; i++) {
    if(names[i][3] == '大一' && names[i][1] == '女') {
        console.log(names[i][0]);
    }
}
```

### 题. 点名

``` html
<button type="button" id="btn">点名</button>
<p id="show-name">...</p>
```

``` js
var btn = document.getElementById('btn');
var showName = document.getElementById('show-name');
var arr = ['隔壁小王', '同桌小李', '儿时小吴', '初恋小周', '红颜小赵'];
function getRandom() {
    return Math.ceil(Math.random() * arr.length);
}
btn.onclick = function() {
    showName.innerHTML = arr[getRandom() - 1];
}
```

### 题. 数组去重

``` js
// 方法1：双重 for 循环
var arr = ['a', 'c', 'd', 'e', 'e', 'a', 'b', 'a', 'e', 'd', 'c'];
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] == arr[i]) {
            arr.splice(j, 1);
            j--;
        }
    }
}

// 方法2：indexOf
var arr = ['a', 'c', 'd', 'e', 'e', 'a', 'b', 'a', 'e', 'd', 'c'];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
    }
}
```

### 题. 双色球

根据双色球摇奖规则，产生6个红球1个蓝球；红球范围1-33， 蓝球范围1-16. 红球不能有重复的产生。

思路：每次产生一个随机球，存入数组中，下一次产生的随机球，要和数组中的进行比较，如果有相等的，则重新产生一个号（循环变量要减1），反之继续存入数组；直到产生6个球；蓝球单独产生；最后输出所有球。

``` js
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
```

### 题. 使用数组重写饮料机

1.当输入0时，模拟自动饮料机停止运行
2.自动饮料机运行的过程中，当输入1-5时候给出对应的饮料(1.可口可乐 2.雪碧 3.鲜橙多 4.冰红茶 5.矿泉水)
3.输入其他值的时候给出非法操作提示，并提示重新输入。

``` js
var arr = ['停止运行', '可口可乐', '雪碧', '鲜橙多', '冰红茶', '矿泉水'];
for(var i = 1; i > 0; i++) {
  var n = parseInt(prompt('输入一个数字'));

  if(n >= 0 && n <= 5) {
    alert(arr[n]);
    // i = -1;
    break;
  }
  alert('非法操作');
}
```

### 题. 把下面数组的首尾两个元素互换

```
['隔壁小王', '同桌小李', '儿时小吴', '初恋小周', '红颜小赵']
```

``` js
var arr = ['隔壁小王', '同桌小李', '儿时小吴', '初恋小周', '红颜小赵'];
// 遍历数组
for(var i = 0; i < arr.length; i++) {
  var temp;
  // 数组存放到temp中进行交换
  temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
}
console.log(arr);
```

### 题. 制作一个函数，getDayNum( 年月日日期 )，可以返回指定日期是当前年的第几天。
例：  getDayNum( “2019-1-2”)    返回值为：2。

``` js
var getDayNum=function(time){
var thisDay=new Date(time);
var getYear=thisDay.getFullYear();
var firstDay=+new Date(getYear.toString());
var thisDay=+new Date(time);
var times=(thisDay-firstDay)/1000;
var d=Math.ceil(times/60/60/24)+1;
return d+'天';
}
console.log(getDayNum('2019-6-6'));
```

### 题. 使用Math对象，制作一个16进制的随机颜色

提示：16进制包括 “ 0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F ”，例： “#f23a4b” 。

``` js
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var color = [];
for (var i = 0; i <= 5; i++) {
    color.push(arr[parseInt(Math.random() * arr.length)]);   // 每次取一个元素
}
var ret = color.join("");    // join() 的返回值是一个字符串；
console.log("十六进制随机颜色是：" + "#" + ret);
```

### 题. 从以下学员名单中随机选出4个学员：

```
['隔壁小王', '同桌小李', '儿时小吴', '初恋小周', '红颜小赵']
```

注意：不要有重复的学员。

``` js
var arr = ['隔壁小王', '同桌小李', '儿时小吴', '初恋小周', '红颜小赵'];
var newArr = []; // 创建一个新数组用来接收随机选出来的值
while(newArr.length < 4) { // 判断条件：当数组大于等于4的时候跳出循环
    var num = Math.floor(Math.random() * arr.length) // 随机数组的索引号
    if(newArr.indexOf(arr[num]) === -1) { // 判断新数组中是否在旧数组中存在，当返回值（不存在-1）如果不存在就执行下面
        newArr.push(arr[num]); // 把旧数组的元素用 push() 方法推给新数组 newArr
    }
}
console.log(newArr);
```

