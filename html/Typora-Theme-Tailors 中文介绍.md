## [返回博客主页](https://chiamzhang.github.io)

## [GitHub 下载链接 DownLoad](https://github.com/ChiamZhang/TyporaTheme-Tailors)

---

# Typora-Theme-Tailors 介绍

## 介绍

本主题借鉴了我最喜欢的两个主题：

1. 物理猫Phycat 作者：XuJilong  主页：[GitHub - sumruler/typora-theme-phycat: 物理猫Typora主题](https://github.com/sumruler/typora-theme-phycat) **主要参考了标题部分**。
2. Typora-Theme-Neumorphism 作者Soanguy   主页 [GitHub - Soanguy/Typora-Theme-Neumorphism: 新拟态风格的 typora 主题](https://github.com/Soanguy/Typora-Theme-Neumorphism) **主要参考了内联部分**。
3. 更改了其中大量的配色和无用hover css，使的整体风格更加适配。由于Soanguy很久没有更新，我在使用中出现了部分bug，都进行了修改
4. 持续更新，有问题在issue中提，我看到有时间就会修复。
5. tailors表示，我是东拼拼西凑凑组成的这个Theme，有些惭愧。

# 标题样式

---

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

# 图片的技巧


1. 快速调节照片大小：将下方的任意一个位置的数字调整为自己想要缩放的大小即可。

    <center><var>方法： <code>![照片名称 数字](照片地址 "数字")</code> </var></center> 

    <center><var>例如：调整为 50%大小<code>![照片名称 50](照片地址 "50")</code> </var></center> 

    > 注意：默认设定的缩放大小以 5 为步值，即：0，5，10，15……

    ![缅因 50](https://img2.baidu.com/it/u=3012984283,879707191&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200)

    ![缅因 30](https://img2.baidu.com/it/u=3012984283,879707191&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200)

1. 需要注意的是无法调整照片为行内元素。

## HTML 元素引入

1. 可以通过 `<var> </var>`元素来引入下面的样式：
   - <var> 该元素的本来语义是定义变量。</var>
   - <var> 这样的吗</var>

# 排版介绍

## 引用样式


> 欲买桂花同载酒，终不似少年游！

## 内联样式


内联样式支持 **加粗**、*强调*、`代码`、<u>下划线</u>、~~删除线~~、$\LaTeX$、X^2^、H~2~O、==高亮==、[链接](https://typora.io)。

## 表格样式

|  左对齐  |       居中对齐        | 右对齐 |
| :------: | :-------------------: | :----: |
| 第三列是 | <u>一些冗长的文字</u> | $1600  |
| 第二列是 |       居中对齐        |  $12   |
| 斑马条纹 |        很整洁         |   $1   |

## 列表样式

1. 有序列表项1。
2. 有序列表项2。
   + 无序子列表项1。
     + 二级无序子列表项1
   + 无序子列表项2。
     + [ ] 已完成的事项。使用"[]"
     + [x] 未完成的事项。使用"[x]"

## 代码样式

```html
<!DOCTYPE html>
<html>
<body>

<h1>*= 操作符</h1>
  
<p id="demo"></p>

<script>
var x = 10;
x *= 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```

```cpp
#include<iostream>
using namespace std;
int main(){
    cout << "hello world!" << endl;
    return 0;
}
```

## 目录样式

[TOC]



