# 代码格式
---
> 以下以JAVA语言讲解编程代码格式的一些规范总结，不要局限在语言限制！

### CodeFormat

* <font color=#FF0000 >*</font> 如果是大括号内为空，则简洁地写成{}即可，大括号中间无需换行和空格；如果是非空代码块则
> * 左大括号前不换行。
> * 左大括号后换行。
> * 右大括号前换行。
> * 右大括号后还有 else 等代码则不换行；表示终止的右大括号后必须换行。

```javascript
* 正例： 
if() {}

if() {
    console.log('L Love You! 2020-09-19 15:12')
} else {

}
```

* <font color=#FF0000 >*</font> 左小括号和右边相邻字符之间不出现空格；右小括号和左边相邻字符之间也不出现空格；而左大括号前需要加空格

```javascript
* 正例： if (a===b) {}

* 反例： if (空格 a == b 空格){}
```

* <font color=#FF0000 >*</font> `if/for/while/switch/do` 等保留字与括号之间都必须加空格

* <font color=#FF0000 >*</font> 任何二目、三目运算符的左右两边都需要加一个空格。
> <font color=#977D06 >说明：</font> 包括赋值运算符=、逻辑运算符&&、加减乘除符号等

* <font color=#FF0000 >*</font> 采用 4 个空格缩进，禁止使用 Tab 字符
> <font color=#977D06 >说明：</font> 如果使用 Tab 缩进，必须设置 1 个 Tab 为 4 个空格。IDEA 设置 Tab 为 4 个空格时，请勿勾选 Use tab character；而在 Eclipse 中，必须勾选 insert spaces for tabs

```java
* 正例： 
public static void main(String[] args) {
	 // 缩进 4 个空格
	 String say = "hello";
	 // 运算符的左右必须有一个空格
	 int flag = 0;
	 // 关键词 if 与括号之间必须有一个空格，括号内的 f 与左括号，0 与右括号不需要空格
	 if (flag == 0) {
		System.out.println(say);
	 }
	 // 左大括号前加空格且不换行；左大括号后换行
	 if (flag == 1) {
		System.out.println("world");
	 // 右大括号前换行，右大括号后有 else，不用换行
	 } else {
		 System.out.println("ok");
		 // 在右大括号后直接结束，则必须换行
	 } 
}
```

* <font color=#FF0000 >*</font> 注释的双斜线与注释内容之间有且仅有一个空格

```javascript
* 正例： 
// 这是示例注释，请注意在双斜线之后有一个空格
String commentString = new String();
```

* <font color=#FF0000 >*</font> 在进行类型强制转换时，右括号与强制转换值之间不需要任何空格隔开。

```java
* 正例： 
double first = 3.2d;
int second = (int)first + 2;
```

* <font color=#FF0000 >*</font> 单行字符数限制不超过 120 个，超出需要换行，换行时遵循如下原则
> * 第二行相对第一行缩进 4 个空格，从第三行开始，不再继续缩进，参考示例。
> * 运算符与下文一起换行。
> * 方法调用的点符号与下文一起换行。
> * 方法调用中的多个参数需要换行时，在逗号后进行。
> * 在括号前不要换行，见反例。

```java
* 正例： 
StringBuilder sb = new StringBuilder();
// 超过 120 个字符的情况下，换行缩进 4 个空格，并且方法前的点号一起换行
sb.append("yang").append("hao")...
 .append("chen")...
 .append("chen")...
 .append("chen");

* 反例： 
StringBuilder sb = new StringBuilder();
// 超过 120 个字符的情况下，不要在括号前换行
sb.append("you").append("are")...append
 ("lucky");
// 参数很多的方法调用可能超过 120 个字符，逗号后才是换行处
method(args1, args2, args3, ...
 , argsX)
```

* <font color=#FF0000 >*</font> 方法参数在定义和传入时，多个参数逗号后面必须加空格

```javascript
* 正例： 下例中实参的 args1，后边必须要有一个空格
method(args1, args2, args3);
```

* 没有必要增加若干空格来使变量的赋值等号与上一行对应位置的等号对齐。

```javascript
* 正例： 
int one = 1;
long two = 2L;
float three = 3F;
StringBuilder sb = new StringBuilder()
```
> <font color=#977D06 >说明：</font> 增加 sb 这个变量，如果需要对齐，则给 one、two、three 都要增加几个空格，在变量比较多的情况下，是非常累赘的事情。

* 不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性
> <font color=#977D06 >说明：</font> 任何情形，没有必要插入多个空行进行隔开。
```javascript
* 正例： 
function test() {
    console.log('长沙的酱板鸭真系好粗')
}

function run() {
    test()
}

* 反例： 
function test() {
    console.log('长沙的酱板鸭真系好粗')
}
function run() { // 两个方法之间没有留空格，当然也没有必要插入多个空行进行隔开。
    test()
}
```










