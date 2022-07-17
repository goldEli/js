### 题1. 从1加到100，求总和。

``` js
let sum = 0
for(let a = 0;a<=100;a++ ){
  sum = sum + a
}
```

### 题2. 从 1 加到 100 所有奇数之和。

``` js
// 方法1
for(var a = 1; a <= 100; a++) {
  if(a % 2 === 0){
    sum = sum + a
  }
}

// 方法2
for(let a = 1; a <= 100; a = a + 2) {
  sum = sum + a
}
// 第2种方法更好，因为只执行了50次，而第1种方法循环100次就代表判断了100次，循环越多，其实性能损耗越高
```

### 题3. 文本渐变色

在页面输出256个*，每行16个，总共16行，颜色逐渐改变。

``` js
for (var i = 0; i < 256; i ++) {
    j = 255 - i;
    document.write("<span style='color:rgb("+j+","+i+","+i+");'>*</span>");
    if (i %16 == 15) {
        document.write("<br>");
    }
}
```

### 题4. (循环)打印以下图形

```
*******
*******
*******
*******
```

``` js
var result='';
for(var i=0;i<4;i++){
  for(var j=0;j<6;j++){
    result=result+"*";
  }
  result=result+"<br>";
}
```



### 题5. 编写程序

编写一个程序，最多接受10个数字，并求出其中所有正整数的和。用户可通过输入999终止程序，统计出用户输入的正整数个数，并显示这些正整数的和。

提示：
  1、输入非数值，不占用10次机会之一，但要求重新输入；
  2、输入的是数值，只累加整数；
    判断是否为一个数字：Number（num）不为NaN，说明为数字
    判断一个数字为正数：Number(num)>0
    判断一个数字为整数：parseInt(num)==parseFloat(num);

``` js
var i = 1, sum = 0, n = 0;
while(i <= 3) {
  var num = prompt("请您输入一个数，我会为您计算出所有正数的和~");
  if(Number(num)) {
    if(num == 999) {
    break;
   }
    else if(num >= 0) {
      sum = sum + parseFloat(num);
      i++;
      n++;
    }
    else if(num < 0) {
      i++;
    }
  }
}
document.write("您一共输入" + n + "个正整数" + "<br />它们的和为：" + sum);
```

### 题6. 输出九九乘法表

``` js
for(var i = 1; i <= 9; i++) {
  for(var j = 1; j <= i; j++) {
    document.write(j + "*" + i + "=" + (i * j) + "&nbsp;&nbsp;&nbsp;&nbsp;");
  }
  document.write('<br>');
}

// 方式2
document.write("<table>");
for(var i = 1; i <= 9; i++) {
  document.write('<tr>');
  for(var j = 1; j <= i; j++) {
    document.write("<td>" + (j + "*" + i + "=" + (i * j)) + "</td>");
  }
  document.write('</tr>');
}
document.write("</table>");
```