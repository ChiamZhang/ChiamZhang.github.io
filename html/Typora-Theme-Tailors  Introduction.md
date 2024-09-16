## [Go Back To Blogs Home Page](https://chiamzhang.github.io/)

## [Github Release DownLoad](https://github.com/ChiamZhang/TyporaTheme-Tailors)

---

# Typora-Theme-Tailors  Introduction

## Introduction

This theme is inspired by my two favorite themes:

1. Phycat by XuJilong. Homepage: [GitHub - sumruler/typora-theme-phycat: Phycat Typora Theme](https://github.com/sumruler/typora-theme-phycat) **Mainly referencing the title part**.
2. Typora-Theme-Neumorphism by Soanguy. Homepage: [GitHub - Soanguy/Typora-Theme-Neumorphism: Neumorphism style typora theme](https://github.com/Soanguy/Typora-Theme-Neumorphism) **Mainly referencing the inline part**.
3. I changed a lot of the colors and unnecessary hover CSS to make the overall style more compatible. Since Soanguy hasn’t updated for a long time, I encountered some bugs while using it, which I fixed.
4. Continuous updates, if there are any issues, please raise them in the issue section, and I will fix them when I have time.
5. Tailors means that I have patched together this theme from various sources, feeling a bit embarrassed.

# Title Styles

---

# First Level Title

## Second Level Title

### Third Level Title

#### Fourth Level Title

##### Fifth Level Title

###### Sixth Level Title

# Image Tips

1. Quickly adjust the photo size: Adjust any number in the positions below to the desired scaling size.

    <center><var>Method: <code>![Photo Name Number](Photo URL "Number")</code> </var></center> 

    <center><var>For example: Adjust to 50% size <code>![Photo Name 50](Photo URL "50")</code> </var></center> 

    > Note: The default scaling size is set in steps of 5, i.e., 0, 5, 10, 15...

    ![Maine 50](https://img2.baidu.com/it/u=3012984283,879707191&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200)

    ![Maine 30](https://img2.baidu.com/it/u=3012984283,879707191&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200)

1. Note that photos cannot be adjusted to inline elements.

## HTML Elements Introduction

1. You can introduce the following styles through the `<var> </var>` element:
   - <var> The original meaning of this element is to define variables.</var>
   - <var> Like this</var>

# Typographical Introduction

## Blockquote Style

> 欲买桂花同载酒，终不似少年游！

## Inline Styles

Inline styles support **bold**, *emphasis*, `code`, <u>underline</u>, ~~strikethrough~~, $\LaTeX$, X^2^, H~2~O, ==highlight==, [link](https://typora.io).

## Table Styles

|  Align Left   |       Align Center       | Align Right |
| :-----------: | :----------------------: | :---------: |
| Third column  | <u>Some lengthy text</u> |    $1600    |
| Second column |       Align center       |     $12     |
| Zebra stripes |        Very tidy         |     $1      |

## List Styles

1. Ordered list item 1.
2. Ordered list item 2.
   + Unordered sublist item 1.
     + Second-level unordered sublist item 1
   + Unordered sublist item 2.
     + [ ] Completed item. Use "[]"
     + [x] Uncompleted item. Use "[x]"

## Code Styles

```html
<!DOCTYPE html>
<html>
<body>

<h1>*= Operator</h1>
  
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

## Table of Contents

[TOC]