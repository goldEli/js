### 题1. 

如果有你20W以上你可以买进口车，如果有你10W以上你可以买合资车，如果你只有5W只可以买国产车，如果你连5W都没有，那就买不了车。

``` js
var money = prompt('请输入你的资产');
if(money>200000) {
    console.log('可以买进口车');
} else if(money>100000) {
    console.log('可以买合资车');
} else if(money>50000) {
    console.log('可以买国产车');
} else {
    console.log('买不了车');
} 
```

### 题2

输入1个同学的成绩，最后输出这个同学到底是哪个分段（60-70为D，70-80为C ，80-90为B，90-100为A 不及格-60为E ）

``` js
var score = praseInt(prompt('请输入同学的成绩'));
if(score>90 && score<=100) {
    console.log('同学属于A分段');
} else if(score>80) {
    console.log('同学属于B分段');
} else if(score>70) {
    console.log('同学属于C分段');
} else if(score>60) {
    console.log('同学属于D分段');
} else {
    console.log('同学属于E分段');
} 
```



### 题3. 登录

账号错误显示用户名错误，如果账号正确，密码错误，则显示密码错误，都正确显示登陆成功。

``` js
var username = prompt('请输入用户名'),
  userpass = prompt('请输入密码吗');

if(username === 'root') { // 先要判断账户
  if(userpass === 'root') { // 其次判断密码
    console.log('登陆成功');
  } else {
    console.log('密码错误');
  }
} else {
  console.log('账户错误');
}
```

### 题4. 点赞

类似朋友圈的点赞与取消赞。

``` html
<div class="like" id="like">👍</div>
```



``` js
var like = document.getElementById('like');

var isLike = false;
like.onclick = function() {
    isLike = !isLike;
    if(isLike) {
        like.innerHTML = '👎';
    } else {
        like.innerHTML = '👍';
    }
}
```

### 题5. 进群流程

``` js
alert("欢迎。。。改备注");
    
var sex = prompt('你的性别，男输入1，女输入2');

if(sex == 1) { // 男性
    for(var i = 1; true; i++) {
        var photo = prompt('爆照不？爆照输入1，不爆照输入2');
        if(photo == 1) {
            alert('提问');
            break; // 退出循环
        } else if(photo == 2) {
            alert('唱歌');
            alert('调戏');
        }
    }
} else if(sex == 2) { // 女性
    var money = prompt('发红包不？发输入1，不发输入2');
    if(money == 1) {
        alert('提问');
    } else if(money == 2) {
        alert('再见')
    }
} else {
    alert('人妖，滚蛋');
}

alert("结束");
```

### 题6. 获取当前星期

``` js
var x;
var d = new Date().getDay();
switch (d) {
    case 0:
        x = "星期天";
        break;
    case 1:
        x = "星期一";
        break;
    case 2:
        x = "星期二";
        break;
    case 3:
        x = "星期三";
        break;
    case 4:
        x = "星期四";
        break;
    case 5:
        x = "星期五";
        break;
    case 6:
        x = "星期六";
        break;
}
document.getElementById("demo").innerHTML = x;
```

### 题7. 模拟红绿灯

如果是红色，那么就变成黄色。如果是黄色,那么就变成绿色。如果是绿色,那么就变成红色。

``` html
<div id="box"></div>
```



``` js
var mybox =  document.getElementById("box");

// 定义 一个变量来控制盒子的颜色，1:红色，2:黄色，3:绿色
var nowColor=2;

//添加事件监听					
mybox.onclick=function(){
    if(nowColor==1){
        //先改变全局变量的值
        nowColor = 2;
        console.log(nowColor);
        //改变页面
        mybox.style.background = "yellow";
    }else if(nowColor==2){
        //先改变全局变量的值
        nowColor = 3;
        console.log(nowColor);
        //改变页面
        mybox.style.background = "green";

    }else if(nowColor==3){
        nowColor = 1;
        console.log(nowColor);
        mybox.style.background = "red";

    }
}
```

### 题8. 模拟自动饮料机

当输入0时，模拟自动饮料机停止运行，自动饮料机运行的过程中，当输入1-5时候给出对应的饮料(1.可口可乐 2.雪碧 3.鲜橙多 4.冰红茶 5.矿泉水)，输入其他值的时候给出非法操作提示，并提示重新输入。

``` js
var a = parseInt(prompt('输入操作'));
  switch(a) {
    case 0: 
      alert('退出');
      i = -1;
      break;
    case 1: 
      alert('可乐');
      i = -1;
      break;
    case 2: 
      alert('雪碧');
      i = -1;
      break;
    case 3: 
      alert('鲜橙多');
      i = -1;
      break;
    case 4: 
      alert('冰红茶');
      i = -1;
      break;
    case 5: 
      alert('矿泉水');
      i = -1;
      break;
    default: 
      alert('非法操作');
  }
```

### 题9. 

根据用户输入的月份，告知计算机帮我们输出对应的季节（要求使用if和switch实现）。

``` js
// if
var month = praseInt(prompt('请输入当前月份'));
if(month>=3 && month<=5) {
    console.log('当前季节是春季');
} else if(month>=6 && month<=8) {
    console.log('当前季节是夏季');
} else if(month>=9 && month<=11) {
    console.log('当前季节是秋季');
} else if(month==12 || month==1 || month==2) {
    console.log('当前季节是冬季');
} else {
    console.log('请输入1-12之间的值');
} 

// switch
var month = parseInt(prompt('请输入当前月份'));
var d;
switch (month) {
    case 3:
        d = '当前是春季';
        break;
    case 4:
        d = '当前是春季';
        break;
    case 5:
        d = '当前是春季';
        break;
    case 6:
        d = '当前是夏季';
        break;
    case 7:
        d = '当前是夏季';
        break;
    case 8:
        d = '当前是夏季';
        break;
    case 9:
        d = '当前是秋季';
        break;
    case 10:
        d = '当前是秋季';
        break;
    case 11:
        d = '当前是秋季';
        break;
    case 12:
        d = '当前是冬季';
        break;
    case 1:
        d = '当前是冬季';
        break;
    case 2:
        d = '当前是冬季';
        break;
}
document.write(d); 
```